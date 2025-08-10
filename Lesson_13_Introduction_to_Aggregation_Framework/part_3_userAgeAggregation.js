db.users.aggregate([
  { $group: { _id: "$country", averageAge: { $avg: "$age" } } }
]);
db.users.aggregate([{ $unwind: "$hobbies" }]);
