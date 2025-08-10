const express = require('express');
const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
  const data = req.body;
  console.log("Data received:", data);
  // Handle the data accordingly
  res.status(200).send('Webhook received.');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
