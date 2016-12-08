var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var numArray = [];
    line.split(',').forEach(n => numArray.push(+n));

    var output = '';
    for (var i = 0; i < numArray.length; i++) {
      if (numArray[i] !== numArray[i + 1]) {
        output += `${numArray[i]},`;
      }
    }

    console.log(output.slice(0, output.length - 1));
  }
});