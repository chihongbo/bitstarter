var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  buf=new buffer(256);
  buf=fs.readFileSync("index.html"); 
  response.send('Hello World'+buf.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
