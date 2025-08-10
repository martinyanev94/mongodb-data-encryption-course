db.sales.aggregate([
    {
        $group: {
            _id: null,
            totalSales: { $sum: "$amount" }
        }
    }
]);
