const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Incorrectly setting the status code before sending the response
  res.send('Hello World');
  res.status(404);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});