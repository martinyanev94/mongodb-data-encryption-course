db.users.find({
  "age": { "$gt": 30 }
});
db.users.find({
  "$or": [
    { "age": { "$lt": 28 } },
    { "city": "Springfield" }
  ]
});
