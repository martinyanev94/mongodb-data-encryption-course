db.users.aggregate([
  {
    "$group": {
      "_id": "$address.city",
      "averageAge": { "$avg": "$age" }
    }
  }
]);
