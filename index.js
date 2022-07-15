var express = require('express');
var app = express();
app.get('/route', function (req, ress) {
  res.send('Hello Nguyen Hai Ngoc');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
