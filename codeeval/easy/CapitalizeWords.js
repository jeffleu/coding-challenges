var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var output = '';

    for (var i = 0; i < line.length; i++) {
      if (line[i - 1] === ' ' || i === 0) {
        output += line[i].toUpperCase();
      } else {
        output += line[i];
      }
    }

    console.log(output);
  }
});