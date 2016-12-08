var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    const result = line.split(' ').map(Number).sort((a,b) => a-b);
    console.log(result);
  }
});