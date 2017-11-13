var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var petFinder = require('../services/petfinder');

var app = express();

var port = 3000;
app.listen(port);

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  // search page

});

app.post('/animals', function(req, res) {
  //
  console.log(req.body);
  var zip = req.body.zip;
  var animalType = req.body.animalType;

  petFinder.petFind(zip, animalType, function( error, response, body) {
    if (error) { throw error; }
    var petsArray = body;
    res.send(petsArray);
  });

});

app.get('/:id', function(req, res) {
  // individual animal page with description
});
