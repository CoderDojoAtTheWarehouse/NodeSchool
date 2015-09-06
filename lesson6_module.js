// import filesystem module from the Node core library
var fs = require('fs');
var path = require('path');

function readDir(dirName, fileExt, callback) {
  var checkExt = function (fileName) {
    return path.extname(fileName) === "." + fileExt;
  };

  fs.readdir(dirName, function (err, filesList) {
    if (err) {
      callback(err);
    } else {
      var filteredList = filesList.filter(checkExt, fileExt);
      callback(err, filteredList);
    }
  });
}

module.exports = readDir;