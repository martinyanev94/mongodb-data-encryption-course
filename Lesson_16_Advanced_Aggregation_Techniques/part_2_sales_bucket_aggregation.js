db.sales.aggregate([
  { $bucket: {
      groupBy: "$amount", 
      boundaries: [0, 500, 1000, 1500, 2000], 
      default: "Other",
      output: { count: { $sum: 1 } }
    }
  }
])
