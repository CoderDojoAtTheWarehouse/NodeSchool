// import filesystem module from the Node core library
var fs = require ('fs');
var path = require ('path');

fs.readdir(process.argv[2], function(err, filesList) {
	if (!err) {
		var fileExt = process.argv[3];
		var x = filesList.length;

		for (var i = 0; i < x; i++) {
			if (path.extname(filesList[i]) === "." + fileExt) {
				console.log(filesList[i]);
			}
		}
	} else {
		throw err;
	}
});