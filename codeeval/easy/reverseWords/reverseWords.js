var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var inputArray = (line.split(' ')).reverse();
    var output = '';
        
    inputArray.forEach(function(word) {
      output += word + ' ';
    });
        
    console.log(output.trim());
  }
});