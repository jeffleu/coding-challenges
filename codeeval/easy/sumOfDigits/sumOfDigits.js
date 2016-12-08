var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var output = line.split('').reduce((total, n) => total + +n, 0);
    console.log(output);
  }
});