db.sales.aggregate([
  { $facet: {
      totalSales: [
          { $group: { _id: null, total: { $sum: "$amount" } } }
      ],
      salesByCategory: [
          { $group: { _id: "$category", total: { $sum: "$amount" } } },
          { $sort: { total: -1 } }
      ]
    }
  }
])
