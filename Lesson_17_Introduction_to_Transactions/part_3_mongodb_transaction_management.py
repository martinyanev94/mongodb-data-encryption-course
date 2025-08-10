session = client.start_session()
transaction_options = {
    "readPreference": "primary",
    "readConcern": {"level": "local"},
    "writeConcern": {"w": "majority"},
}

with session.start_transaction(**transaction_options):
    # Perform your operations here
    ...
