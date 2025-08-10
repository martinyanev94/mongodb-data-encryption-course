db.users.updateOne(
  { "name": "Alice" },
  { "$set": { "age": 31 } }
);
