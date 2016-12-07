var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var array = line.split(' ');
    var compare = function(num1, num2) {
      return num1 - num2;
    };
    var output = '';
    var sorted = array.sort(compare);
        
    sorted.forEach(function(num) {
      output += num + ' ';
    });
        
    console.log(output.trim());
  }
});