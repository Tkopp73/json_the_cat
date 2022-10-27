const request = require('request');
const typeOfCat = process.argv[2];


request('https://api.thecatapi.com/v1/breeds/search?q=' + typeOfCat, (err, response, body) => {
  if (err) return console.log(`ERROR: ${err}`);
  if (!typeOfCat) return console.log(`ERROR: Please enter a cat type.`);
  const data = JSON.parse(body);
  console.log(data[0].description);
});





