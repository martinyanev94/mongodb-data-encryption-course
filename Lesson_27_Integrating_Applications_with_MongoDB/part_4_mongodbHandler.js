import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const database = client.db('my-database');
  const collection = database.collection('my-collection');

  if (req.method === 'POST') {
    const result = await collection.insertOne(req.body);
    res.status(201).json(result.ops[0]);
  } else {
    const data = await collection.find({}).toArray();
    res.status(200).json(data);
  }

  await client.close();
}
