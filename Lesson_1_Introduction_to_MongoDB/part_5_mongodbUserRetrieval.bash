npm install mongodb
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const database = client.db("myDatabase");
        const users = database.collection("users");

        const user = await users.findOne({ name: "Bob" });
        console.log(user);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
