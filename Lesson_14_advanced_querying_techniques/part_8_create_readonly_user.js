db.createUser({
  user: "readonlyUser",
  pwd: "password123",
  roles: [{ role: "read", db: "yourDatabase", collection: "products" }]
});
