var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
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
    // var searchTerm = req.body.searchTerm;
    //
    // // call a helper function that takes in github username
    // github.getReposByUsername(searchTerm, function(error, response, body){
    //   if (error) { throw error; }
    //
    //
    //   database.save(body, function(error, message){
    //     if (error){
    //       res.send(error);
    //     }
    //     res.send(message);
    //   });
    //
    // });
});

app.get('/:id', function(req, res) {
  // individual animal page with description
});
