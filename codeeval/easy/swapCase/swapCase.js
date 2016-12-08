var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var output = '';

    for (var i = 0; i < line.length; i++) {
      (line[i] === line[i].toUpperCase()) ? output += line[i].toLowerCase() : output += line[i].toUpperCase();
    }
        
    console.log(output);
  }
});