db.orders.aggregate([
  {
    $facet: {
      totalSales: [
        { $match: { orderDate: { $gte: new Date("2023-01-01") } } },
        { $group: { _id: null, total: { $sum: "$amount" } } }
      ],
      totalOrders: [
        { $match: { orderDate: { $gte: new Date("2023-01-01") } } },
        { $count: "count" }
      ]
    }
  }
]);
