db.products.find({ price: { $lt: 50 } }).explain("executionStats");
