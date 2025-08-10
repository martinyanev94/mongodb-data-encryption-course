db.orders.find({ items: 'Laptop' });
db.orders.find({ items: { $size: 3 } });
