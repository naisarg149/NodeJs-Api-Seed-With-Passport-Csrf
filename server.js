var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello NodeJs API...');
});

app.listen(3000, function () {
  console.log('Server started...');
});
