db.sales.aggregate([
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
