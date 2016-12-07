var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var inputArray = line.split('');

    var result = inputArray.reduce(function(total, num) {
      return total += Math.pow(Number(num), inputArray.length);
    }, 0);
        
    if (result === Number(line)) {
      console.log('True');
    } else {
      console.log('False');
    }
  }
});