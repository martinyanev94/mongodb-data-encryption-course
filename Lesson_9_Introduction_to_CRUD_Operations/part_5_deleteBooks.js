db.books.deleteOne({ isbn: '101' });
db.books.deleteMany({ discount: { $exists: true } });
