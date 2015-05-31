var express = require('express')
var app = express();

app.use(express.static(__dirname + "/public"));//looking through our static files (ie html)

app.get('/contactlist', function (req, res) {
  console.log("I received a get request")
});

app.listen(3000);//running on localhost:3000
console.log("Server running on port 3000");
