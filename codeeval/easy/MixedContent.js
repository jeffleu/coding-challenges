var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var inputArray = line.split(',');
    var fruits = [];
    var numbers = [];
        
    inputArray.forEach(function(value) {
      if (Number(value) || value === '0') {
        numbers.push(value);
      } else {
        fruits.push(value);
      }
    });
        
    var output = '';
        
    for (var i = 0; i < fruits.length; i++) {
      if (i === fruits.length - 1) {
        if (numbers.length === 0) {
          output += fruits[i];
        } else {
          output += fruits[i] + '|';
        }
      } else {
        output += fruits[i] + ',';
      }
    }
        
    for (var j = 0; j < numbers.length; j++) {
      if (j === numbers.length - 1) {
        output += numbers[j];
      } else {
        output += numbers[j] + ',';
      }
    }
        
    console.log(output);
  }
});