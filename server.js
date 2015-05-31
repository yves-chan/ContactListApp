var express = require('express');
var app = express();
var mongojs = require('mongojs');//needs mongojs
var db = mongojs('contactlist', ['contactlist']);//specify which mongodb we are using, in this case 'contactlist'
var bodyParser = require('body-parser');


app.use(express.static(__dirname + "/public"));//looking through our static files (ie html)
app.use(bodyParser.json());//lets us parse the input data as json

//Tells the server to listen for get request, when it receives, it prints
app.get('/contactlist', function(req, res) {
  console.log("I received a get request")

  db.contactlist.find(function(err,docs) {
    console.log(docs);
    //respond by putting data into a json format, which controller can use
    res.json(docs);

  });
});

//listens to post request from controller, teaches our server how to parse the body of the input data, and add it to database
app.post('/contactlist', function(req, res) {
  console.log(req.body);
  db.contactlist.insert(req.body, function(err,doc) {
    res.json(doc);
  });
});


app.listen(3000);//running on localhost:3000
console.log("Server running on port 3000");
