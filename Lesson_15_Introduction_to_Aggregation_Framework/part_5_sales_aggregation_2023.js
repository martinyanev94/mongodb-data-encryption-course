db.sales.aggregate([
  { $match: { date: { $gte: new ISODate("2023-01-01"), $lt: new ISODate("2023-12-31") } } },
  { $group: { 
      _id: "$category", 
      totalSales: { $sum: "$amount" } 
    } 
  },
  { $sort: { totalSales: -1 } },
  { $project: { 
      category: "$_id", 
      totalSales: 1, 
      _id: 0 
    } 
  }
])
