db.users.aggregate([
  {
    $project: {
      username: 1,
      phoneNumber: 1
    }
  }
]);
