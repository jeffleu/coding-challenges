var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var num1 = Number(line.split(' ')[0]);
    var num2 = Number(line.split(' ')[1]);
    var len = Number(line.split(' ')[2]);
        
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