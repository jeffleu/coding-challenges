var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var x = Number(line.split(',')[0]);
    var y = Number(line.split(',')[1]);
        
    if (x > y) {
      console.log(x - (Math.floor(x / y) * y));
    } else if (x === y) {
      console.log(x / y);
    } else {
      console.log(x);
    }
  }
});