var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    const reversed = line.split(' ').reverse().join(' ');
    console.log(reversed);
  }
});