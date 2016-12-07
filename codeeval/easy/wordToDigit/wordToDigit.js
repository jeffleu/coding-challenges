var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var lineArray = line.split(';');
    var output = '';
    lineArray.forEach(function(numString) {
      if (numString === 'zero') {
        output += 0;
      } else if (numString === 'one') {
        output += 1;
      } else if (numString === 'two') {
        output += 2;
      } else if (numString === 'three') {
        output += 3;
      } else if (numString === 'four') {
        output += 4;
      } else if (numString === 'five') {
        output += 5;
      } else if (numString === 'six') {
        output += 6;
      } else if (numString === 'seven') {
        output += 7;
      } else if (numString === 'eight') {
        output += 8;
      } else if (numString === 'nine') {
        output += 9;
      }
    });

    console.log(output);
  }
});