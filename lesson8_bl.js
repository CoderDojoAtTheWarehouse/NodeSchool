// import http core module from the Node core library
var http = require('http');
// import the bl library
var bl = require('bl');

// @param response {Node Stream Object} that can emit events
http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      console.log(err);
    } else if (data) {
      console.log(data.length);
      console.log(data.toString());
    }
  }));
});