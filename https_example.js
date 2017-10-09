var https = require('https');

var options = {
  host: 'www.example.org',
  path: '/'
};

//this is called by https when request is made

var callback = function() {
  console.log('In reposnse handler callback');
}


console.log("I'm about to make the request.");

https.request(options, callback).end();

console.log("I've made the request!");