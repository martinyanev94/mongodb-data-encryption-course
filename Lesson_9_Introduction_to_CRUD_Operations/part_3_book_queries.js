db.books.find();
db.books.find({ isbn: '101' });
db.books.find({
    $or: [
        { author: 'John Doe' },
        { author: 'Alice Johnson' }
    ]
});
