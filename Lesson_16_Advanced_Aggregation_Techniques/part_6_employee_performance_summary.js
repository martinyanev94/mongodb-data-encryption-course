db.employees.aggregate([
  { $match: { isActive: true } },
  { $group: {
      _id: "$employeeId", 
      totalSales: { $sum: "$sales" },
      averageRating: { $avg: "$performanceRating" },
      totalProjects: { $sum: 1 }
    }
  },
  { $sort: { totalSales: -1 } },
  { $project: {
      employeeId: "$_id",
      totalSales: 1,
      averageRating: { $round: ["$averageRating", 2] },
      totalProjects: 1
    }
  }
])
