var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
  var buf = new Buffer(256);
  buf = fs.readFileSync('index.html');
  var str = buf.toString();
  response.send(str);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

// test git username2
