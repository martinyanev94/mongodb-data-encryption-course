const page = 2; // Example: user wants the second page
const pageSize = 10;

db.products.find()
  .skip((page - 1) * pageSize)
  .limit(pageSize);
