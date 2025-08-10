from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client.db
# Assuming you have some transactions to analyze
stats = db.command("serverStatus")['transactions']
print(f"Transaction Stats: {stats}")
