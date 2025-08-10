import time
from pymongo import MongoClient, errors

client = MongoClient('mongodb://localhost:27017/')
orders = client.db.orders
inventory = client.db.inventory

def process_order_with_retry(order, retries=3):
    session = client.start_session()
    transaction_options = {
        "readConcern": {"level": "local"},
        "writeConcern": {"w": "majority"},
    }
    
    for attempt in range(retries):
        try:
            session.start_transaction(**transaction_options)
            orders.insert_one(order, session=session)
            inventory.update_one(
                {"sku": order['sku']},
                {"$inc": {"qty": -order['qty']}},
                session=session,
            )
            session.commit_transaction()
            return "Order processed successfully."
        except (errors.ConnectionFailure, errors.OperationFailure) as error:
            session.abort_transaction()
            if attempt < retries - 1:  # Don't wait after the last attempt
                time.sleep(2)  # Basic backoff strategy
                print(f"Retrying transaction due to error: {error}")
            else:
                return f"Failed to process order after {retries} attempts."

order_data = {"sku": "xyz789", "qty": 2}
result = process_order_with_retry(order_data)
print(result)
