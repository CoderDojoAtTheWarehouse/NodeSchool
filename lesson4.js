// import filesystem module from the Node core library
 var fs = require ('fs');

fs.readFile(process.argv[2], 'utf8', function(err, fileContent) {
	if (!err) {
		var fileLines = fileContent.split('\n').length - 1;
		console.log(fileLines);
	} else {
		throw err;
	}
})


/* Alternative:

function printLines (err, fileContent) {
	if (!err) {
		var fileLines = fileContent.split('\n').length - 1;
		console.log(fileLines);
	} else {
		throw err;
	}
}

function readFile() {
	fs.readFile(process.argv[2], 'utf8', printLines);
}

readFile();

*/