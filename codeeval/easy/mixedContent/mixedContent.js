var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    const fruits = [];
    const numbers = [];
        
    line.split(',').forEach(value => {
      (+value || value === '0') ? numbers.push(value) : fruits.push(value);
    });
        
    var output = '';
    for (var i = 0; i < fruits.length; i++) {
      if (i === fruits.length - 1) {
        (numbers.length === 0) ? output += fruits[i] : output += `${fruits[i]}|`;
      } else {
        output += `${fruits[i]},`;
      }
    }
        
    for (var j = 0; j < numbers.length; j++) {
      (j === numbers.length - 1) ? output += numbers[j] : output += numbers[j] + ',';
    }
        
    console.log(output);
  }
});