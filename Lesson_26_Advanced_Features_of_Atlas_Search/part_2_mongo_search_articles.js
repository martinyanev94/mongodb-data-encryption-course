db.articles.aggregate([
  {
    $search: {
      compound: {
        must: [
          {
            text: {
              query: "MongoDB Atlas",
              path: "title"
            }
          }
        ],
        filter: [
          {
           .equal: {
              path: "status",
              value: "published"
            }
          }
        ]
      }
    }
  }
]);
