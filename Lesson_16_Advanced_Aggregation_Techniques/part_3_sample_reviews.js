db.reviews.aggregate([
  { $sample: { size: 5 } }
])
