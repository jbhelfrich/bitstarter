var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var resultBuffer;

app.get('/', function(request, response) {
  result = fs.readFileSync('index.html', 'utf-8')
  response.send(result);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
