const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing error handling for missing or invalid user data
  res.status(201).send(user);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});