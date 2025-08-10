db.images.insertOne({
    name: "Cat",
    imageData: [0.2, 0.7, 0.1, 0.9, ...]  // Vector representation
});
const queryVector = [0.2, 0.6, 0.05, 0.85, ...];
const similarImages = db.images.find({
    $near: {
        $geometry: {
            type: "Point",
            coordinates: queryVector
        },
        $maxDistance: 100  // Adjust based on your vector scale
    }
});
