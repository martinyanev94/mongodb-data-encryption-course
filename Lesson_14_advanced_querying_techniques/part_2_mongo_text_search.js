db.posts.createIndex({ content: "text" });
db.posts.find({ $text: { $search: "MongoDB" } });
db.posts.find({ $text: { $search: "MongoDB database" } });
