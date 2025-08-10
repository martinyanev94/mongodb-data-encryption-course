use myDatabase;
db.createCollection("users");
db.users.insertOne({
  "name": "Bob",
  "age": 25,
  "address": {
      "street": "456 Elm St",
      "city": "Othertown"
  }
});
db.users.insertMany([
  {
    "name": "Charlie",
    "age": 32
  },
  {
    "name": "Diana",
    "age": 29
  }
]);
