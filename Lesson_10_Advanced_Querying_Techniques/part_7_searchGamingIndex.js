db.products.createIndex({ description: "text" });
db.products.find({ $text: { $search: "gaming" } });
