const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (err, response, body) => {
    if (err) return callback(`ERROR: ${err}`, null);
    if (!breedName) return callback(`Please enter a cat type.`, null);
    const data = JSON.parse(body);
    callback(null, data[0].description);

  });

};





module.exports = {fetchBreedDescription};

