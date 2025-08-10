npm install mongodb
const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB connection string
const uri = "mongodb://user:password@host:27017/?w=majority";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
    try {
        // Connect the client to the server
        await client.connect();
        
        // Access database
        const database = client.db('productions');
        const movies = database.collection('movies');
        
        // Query for a movie
        const query = { title: '200 meters' };
        const movie = await movies.findOne(query);
        console.log(movie);
    } finally {
        // Ensures that client will close when finish/error
        await client.close();
    }
}

run().catch(console.dir);
