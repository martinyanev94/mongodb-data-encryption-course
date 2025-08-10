db.orders.aggregate([
  { $lookup: {
      from: "customers",
      localField: "customerId",
      foreignField: "_id",
      as: "customerInfo"
    }
  },
  { $unwind: "$customerInfo" },
  { $project: {
      orderId: "$_id",
      customerName: "$customerInfo.name",
      orderAmount: "$amount"
    }
  }
])
