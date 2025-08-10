db.users.aggregate([
  { $match: { age: { $gt: 22 } } }
]);
