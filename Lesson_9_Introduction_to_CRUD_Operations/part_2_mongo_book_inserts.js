db.books.insertOne({
    title: 'Mastering MongoDB',
    isbn: '101',
    author: 'John Doe',
    price: 29.99
});
db.books.insertMany([
    { title: 'MongoDB Basics', isbn: '102', author: 'Jane Smith', price: 19.99 },
    { title: 'Advanced MongoDB', isbn: '103', author: 'Alice Johnson', price: 39.99 }
]);
