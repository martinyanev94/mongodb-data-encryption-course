db.articles.aggregate([
  {
    $search: {
      text: {
        query: "advanced features",
        path: "content",
      },
      score: {
        boost: {
          path: "viewCount",
          weight: 2.0
        }
      }
    }
  }
]);
