// import filesystem module from the Node core library
var fs = require ('fs');

var fileBuffer = fs.readFileSync(process.argv[2]);
var fileLines = fileBuffer.toString().split('\n').length - 1;

console.log(lines);