db.stores.createIndex({ location: "2dsphere" });
db.stores.find({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [longitude, latitude]
      },
      $maxDistance: 5000
    }
  }
});
