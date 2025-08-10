db.books.aggregate([
  {
    $search: {
      autocomplete: {
        query: "Har",
        path: "title"
      }
    }
  },
  {
    $limit: 5
  }
]);
