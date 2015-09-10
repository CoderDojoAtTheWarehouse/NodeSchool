// import http core module from the Node core library
var http = require('http');

// @param response {Node Stream Object} that can emit events
http.get(process.argv[2], function (response) {
  var finalResults = '';

  response.setEncoding('utf8');

  response.on('error', function (error) {
    console.log(error);
  });

  response.on('data', function (data) {
    finalResults += data;
  });

  response.on('end', function () {
    console.log(finalResults.length);
    console.log(finalResults);
  });
});