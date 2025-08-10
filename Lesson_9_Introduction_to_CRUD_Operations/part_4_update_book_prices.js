db.books.updateOne(
    { isbn: '101' },
    { $set: { price: 34.99 } }
);
db.books.updateMany(
    { price: { $gt: 30 } }, 
    { $set: { discount: '10%' } }
);
