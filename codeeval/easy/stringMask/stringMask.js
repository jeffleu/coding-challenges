var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    const inputArray = line.split(' ');
    var output = '';
        
    for (var i = 0; i < inputArray[0].length; i++) {
      if (inputArray[1][i] === '1') {
        output += inputArray[0][i].toUpperCase();
      } else if (inputArray[1][i] === '0') {
        output += inputArray[0][i].toLowerCase();
      }
    }
        
    console.log(output);
  }
});