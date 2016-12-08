var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    const num1 = +line.split(' ')[0];
    const num2 = +line.split(' ')[1];
    const len = +line.split(' ')[2];
        
    var output = '';
        
    for (var i = 1; i <= len; i++) {
      if (i % num1 === 0 && i % num2 === 0) {
        output += 'FB ';
      } else if (i % num1 === 0) {
        output += 'F ';
      } else if (i % num2 === 0) {
        output += 'B ';
      } else {
        output += i + ' ';
      }
    }

    console.log(output); 
  }
});