var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var numbers = (((line.split(';')[1]).split(',')).map(Number)).sort();

    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] === numbers[i + 1]) {
        console.log(numbers[i]);
      }
    }

  }
});