db.posts.createIndex({ content: "text" });
const searchResults = db.posts.find({
    $text: { $search: "database MongoDB" }
});
const searchResults = db.posts.find({
    $text: { $search: "database MongoDB" }
}).sort({ score: { $meta: "textScore" } }).limit(5);
