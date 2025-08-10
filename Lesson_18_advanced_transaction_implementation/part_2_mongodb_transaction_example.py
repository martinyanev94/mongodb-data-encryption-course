from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
session = client.start_session()
transaction_options = {
    "readConcern": {"level": "local"},
    "writeConcern": {"w": "majority"},
}

try:
    session.start_transaction(**transaction_options)
    
    # Assume orders and inventory are sharded collections
    orders = client.db.orders
    inventory = client.db.inventory

    order = {"sku": "xyz456", "qty": 3}
    orders.insert_one(order, session=session)
    
    inventory.update_one(
        {"sku": "xyz456"},
        {"$inc": {"qty": -order['qty']}},
        session=session,
    )
    
    session.commit_transaction()
except Exception as e:
    session.abort_transaction()
    print(f"Failed to commit transaction: {e}")
finally:
    session.end_session()
