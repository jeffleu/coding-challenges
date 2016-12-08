var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var output = ((line.split(' ')).sort()).reverse().reduce((total, time) => `${total} ${time}`);    
    console.log(output.trim());
  }
});