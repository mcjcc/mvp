var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var port = 3000;
app.listen(port);

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser);

app.get('/', function(req, res) {
  // res.send('hello, world! boo!zee');
  // res.render('index');
})
