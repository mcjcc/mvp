// this worker gets the data from the api and saves it to the database
var request = require('request');

if (process.env.NODE_ENV === 'production') {
  var petFinderAPIKey = process.env.PETFINDER_API_KEY;
} else {
  console.log('node env: ', process.env.NODE_ENV);
  const config = require('../config/config.js');
  var petFinderAPIKey = config.API_KEY;
}

let url = 'http://api.petfinder.com/';



var petFind = function(zip, animalType, callback) {
  console.log('inside petFind helper function');
  // how many animals to return for petFind
  var count = 50;
  var apiMethod = 'pet.find';
  var formedURL = `${url}${apiMethod}?key=${petFinderAPIKey}&location=${zip}&animal=${animalType}&count=${count}&format=json`;
  // var formedURL = `${url}${apiMethod}?key=${petFinderAPIKey}&location=${zip}&animal=${animalType}&format=json`;
  console.log('formedURL: ', formedURL);
  var options = {
    url: formedURL,
    json: true
  }
  request(options, function(error, response, body) {
    if (error) {
      callback(error, null, null);
    }
    var petsArray = body.petfinder.pets.pet;
    callback(null, response, petsArray);
  });

}

// TODO: add a helper function that formats data

var gatherPhotos = function() {

}

module.exports.petFind = petFind;
