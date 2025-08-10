db.products.find({
    $or: [
        { color: 'red' },
        { price: { $lt: 30 } }
    ]
});
