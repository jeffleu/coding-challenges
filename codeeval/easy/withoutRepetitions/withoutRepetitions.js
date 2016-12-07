var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var inputArray = line.split('');
    var output = '';
        
    inputArray.forEach(function(letter) {
      if (letter !== output[output.length - 1]) {
        output += letter;
      }
    });
        
    console.log(output);
  }
});