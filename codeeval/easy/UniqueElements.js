var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var numArray = [];
    var array = (line.split(',')).forEach(function(num) {
      numArray.push(Number(num));
    });
    var output = '';

    for (var i = 0; i < numArray.length; i++) {
      if (numArray[i] !== numArray[i + 1]) {
        output += numArray[i] + ',';
      }
    }

    console.log(output.slice(0, output.length - 1));
  }
});