db.collection.aggregate([
  {
    $search: {
      autocomplete: {
        query: "Mon",
        path: "title"
      }
    }
  },
  {
    $limit: 5
  }
])
