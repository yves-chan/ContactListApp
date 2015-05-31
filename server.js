var express = require('express');
var app = express();
var mongojs = require('mongojs');//needs mongojs
var db = mongojs('contactlist', ['contactlist']);//specify which mongodb we are using, in this case 'contactlist'



app.use(express.static(__dirname + "/public"));//looking through our static files (ie html)

//Tells the server to listen for get request, when it receives, it prints
app.get('/contactlist', function(req, res) {
  console.log("I received a get request")

  db.contactlist.find(function(err,docs) {
    console.log(docs);
    //respond by putting data into a json format, which controller can use
    res.json(docs);

  });
});

app.listen(3000);//running on localhost:3000
console.log("Server running on port 3000");
