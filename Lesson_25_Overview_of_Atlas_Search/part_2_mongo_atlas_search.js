db.collection.aggregate([
  {
    $search: {
      index: "default",
      text: {
        query: "MongoDB Atlas Search",
        path: "description"
      }
    }
  },
  {
    $project: {
      _id: 0,
      title: 1,
      description: 1
    }
  }
])
