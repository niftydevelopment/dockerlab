var express = require('express');
var fs = require('fs');

var app = express();



app.get('/', function (req, res) {
  var data = fs.readFileSync('/mock/data.json','utf8');
  console.log(fs.readFileSync('/mock/data.json','utf8'));
  res.send(data)
});

var server = app.listen(3000, function () {
  console.log('Server running at http://localhost:' + server.address().port)
});