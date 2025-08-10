use admin
db.createRole({
    role: "readAndInsert",
    privileges: [
        { resource: { db: "myDatabase", collection: "" }, actions: ["find", "insert"] }
    ],
    roles: []
});
