const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Correctly setting the status code before sending the response
  res.status(404);
  res.send('Not Found');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});