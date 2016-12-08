var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    const x = {
      1: line[0],
      2: line[2]
    };
    const y = {
      1: line[1],
      2: line[3]
    };
    const distance = Math.sqrt(Math.pow((x[1] - x[2]), 2) + Math.pow((y[1] - y[2]), 2));
      
    console.log(distance);
  }
});