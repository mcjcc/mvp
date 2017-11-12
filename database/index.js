var mongoose = require('mongoose');
var dbUri = process.env.MONGODB_URI || 'mongodb://localhost/PetAdopt';

mongoose.connect(uri, {
  useMongoClient: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('Mongoose connection successful!');
});

let animalsSchema = mongoose.Schema({

})
