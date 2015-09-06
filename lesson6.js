// import local module
var myModule = require('./lesson6_module');

function printList(err, receivedList) {
  if (err) {
    console.log(err);
  } else {
    receivedList.forEach(function (file) {
      console.log(file);
    });
  }
}

function main() {
  myModule(process.argv[2], process.argv[3], printList);
}

main();