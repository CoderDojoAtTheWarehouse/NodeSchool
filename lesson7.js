// import http core module from the Node core library
var http = require('http');

// @param response {Node Stream Object} that can emit events
http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');
  response.on("data", function (data) {
    console.log(data);
  });
  response.on("error", function (error) {
    console.log(error);
  });
});