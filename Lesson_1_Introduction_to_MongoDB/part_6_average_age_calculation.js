db.users.aggregate([
  {
    "$group": {
      "_id": null,
      "averageAge": { "$avg": "$age" }
    }
  }
]);
