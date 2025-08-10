pip install pymongo
from pymongo import MongoClient

# Connect to the MongoDB server
client = MongoClient("mongodb://user:password@localhost:27017/")

# Access the database
db = client['productions']
movies_collection = db['movies']

# Query for a movie
query = {'title': '200 meters'}
movie = movies_collection.find_one(query)
print(movie)
