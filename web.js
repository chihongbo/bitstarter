var express = require('express');
var app = express();
var fs=require('fs');
 buf=new Buffer(256);
 buf=fs.readFileSync("index.html");

app.use(express.logger());

app.get('/', function(request, response) {
  //buf=new Buffer(256);
  //buf=fs.readFileSync("index.html"); 
  response.send('Hello World'+buf.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
