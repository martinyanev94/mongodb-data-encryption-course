db.products.aggregate([
  {
    $search: {
      index: "productsIndex",
      text: {
        query: "smartphone",
        path: "name"
      }
    }
  },
  {
    $facet: {
      brands: [
        {
          $group: {
            _id: "$brand",
            count: { $sum: 1 }
          }
        }
      ],
      priceRanges: [
        {
          $bucket: {
            groupBy: "$price",
            boundaries: [0, 200, 400, 600, 800, 1000],
            default: "Other",
            output: {
              count: { $sum: 1 }
            }
          }
        }
      ]
    }
  }
]);
