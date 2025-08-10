db.products.aggregate([
  { $match: { price: { $gt: 100 } } }
])
