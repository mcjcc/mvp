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
  name: String,
  animalId: Number,
  type: String,
  description: String,
  size: String,
  age: String,
  breeds: [String],
  gender: String,
  mix: Boolean.
  shelterId: String,
  photos: Schema.Types.Mixed,
  city: String,
  zip: String,
  state: String,
  email: String,
  phone: String
});


let save = () => {


}

modules.export.save = save;
