db.products.aggregate([
  { $sortByCount: "$category" }
])
