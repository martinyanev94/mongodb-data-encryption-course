def update_inventory_and_order(order_id, qty):
    session = client.start_session()
    try:
        session.start_transaction()
        
        order = orders.find_one({"_id": order_id}, session=session)
        if order['qty'] < qty:
            raise ValueError("Insufficient stock for the order.")
        
        orders.update_one(
            {"_id": order_id},
            {"$set": {"status": "processed"}},
            session=session,
        )
        
        inventory.update_one(
            {"sku": order['sku']},
            {"$inc": {"qty": -qty}},
            session=session,
        )
        
        session.commit_transaction()
    except Exception as e:
        session.abort_transaction()
        print(f"Transaction aborted: {e}")
    finally:
        session.end_session()

update_inventory_and_order("60d5ec49d42c0a001512ab48", 3)
