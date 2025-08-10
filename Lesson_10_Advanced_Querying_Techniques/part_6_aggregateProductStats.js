db.products.aggregate([
    {
        $facet: {
            averagePrice: [
                { $group: { _id: null, average: { $avg: "$price" } } }
            ],
            totalCount: [
                { $count: "count" }
            ]
        }
    }
]);
