db.sales.aggregate([
  { $facet: {
      totalSales: [
          { $group: { _id: null, total: { $sum: "$amount" } } }
      ],
      salesByMonth: [
          { $group: { _id: { $month: "$date" }, total: { $sum: "$amount" } } },
          { $sort: { total: -1 } }
      ],
      reviewCounts: [
          { $group: { _id: "$productId", count: { $sum: 1 } } }
      ]
    }
  }
])
