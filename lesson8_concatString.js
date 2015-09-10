// import http core module from the Node core library
var http = require('http');
// import the concat-string library
var cs = require('concat-stream');

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');

  response.pipe(cs(function (data) {
    console.log(data.length);
    console.log(data);
  }));
});