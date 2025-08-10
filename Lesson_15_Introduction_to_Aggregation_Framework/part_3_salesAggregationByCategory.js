db.sales.aggregate([
  { $group: { 
      _id: "$category", 
      totalSales: { $sum: "$amount" } 
    } 
  },
  { $sort: { totalSales: -1 } }
])
