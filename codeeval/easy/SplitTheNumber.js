var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var numbers = (line.split(' ')[0]).split('');
    var pattern = (line.split(' ')[1]).split('');
    var indexOfSign = 0;
        
    pattern.forEach(function(letter, position) {
      if (/[^a-z]/i.test(letter)) {
        indexOfSign += position;
        for (var i = numbers.length - 1; i >= position; i--) {
          numbers[i + 1] = numbers[i];
        }
        numbers[position] = letter;
      }
    });
        
    var stringWithSign = numbers.reduce(function(str, value) {
      return str += value;
    }, '');
        
    if (pattern[indexOfSign] === '-') {
      stringWithSign = stringWithSign.split('-');
      console.log(Number(stringWithSign[0]) - Number(stringWithSign[1]));
    } else if (pattern[indexOfSign] === '+') {
      stringWithSign = stringWithSign.split('+');
      console.log(Number(stringWithSign[0]) + Number(stringWithSign[1]));
    }
  }
});