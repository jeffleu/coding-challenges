var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    for (var i = 1; i < 100; i += 2) {
      console.log(i);
    }
  }
});

