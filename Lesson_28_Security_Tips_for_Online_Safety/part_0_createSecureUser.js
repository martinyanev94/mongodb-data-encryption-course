use admin
db.createUser({
    user: "secureUser",
    pwd: promptPassword(),
    roles: [
        { role: "readWrite", db: "myDatabase" }
    ]
});
