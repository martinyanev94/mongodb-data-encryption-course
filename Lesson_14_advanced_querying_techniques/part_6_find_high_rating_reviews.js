db.products.find({
  reviews: {
    $elemMatch: {
      rating: 5
    }
  }
});
