from pymongo import MongoClient, WriteConcern
from pymongo.errors import ConnectionFailure, OperationFailure

client = MongoClient('mongodb://localhost:27017/')
orders = client.db.orders
inventory = client.db.inventory

def process_order(order):
    with client.start_session() as session:
        session.start_transaction()
        try:
            orders.insert_one(order, session=session)
            inventory.update_one(
                {"sku": order['sku']},
                {"$inc": {"qty": -order['qty']}},
                session=session,
            )
            session.commit_transaction()
        except (ConnectionFailure, OperationFailure) as error:
            session.abort_transaction()
            print(f"Transaction aborted due to error: {error}")

order_data = {"sku": "abc123", "qty": 5}
process_order(order_data)
