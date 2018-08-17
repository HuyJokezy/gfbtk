// Modules
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

// Route
app.get('/', (req, res) => {
  const { a: accessToken, t: fullTextResponse } = req;
  console.log('Access Token:', accessToken);
  console.log('Full text response:', fullTextResponse);
  res.json({
    status: 'succeeded',
  });
});

app.listen(process.env.PORT || 8080);
console.log('Token server on');

module.exports = app;
