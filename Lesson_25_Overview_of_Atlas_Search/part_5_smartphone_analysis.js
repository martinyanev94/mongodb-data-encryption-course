db.products.aggregate([
  {
    $search: {
      index: "productIndex",
      text: {
        query: "smartphone",
        path: "name"
      }
    }
  },
  {
    $facet: {
      priceRange: [
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
      ],
      ratings: [
        {
          $group: {
            _id: "$rating",
            count: { $sum: 1 }
          }
        }
      ]
    }
  }
])
