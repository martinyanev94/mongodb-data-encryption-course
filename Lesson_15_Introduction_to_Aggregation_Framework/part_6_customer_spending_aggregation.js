db.orders.aggregate([
  { $lookup: {
      from: "customers",
      localField: "customerId",
      foreignField: "_id",
      as: "customerInfo"
    }
  },
  { $unwind: "$customerInfo" },
  { $group: {
      _id: "$customerInfo.name",
      totalAmountSpent: { $sum: "$amount" }
    }
  }
])
