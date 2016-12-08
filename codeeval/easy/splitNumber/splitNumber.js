var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    const numbers = (line.split(' ')[0]).split('');
    const pattern = (line.split(' ')[1]).split('');
    var indexOfSign = 0;
        
    pattern.forEach((letter, index) => {
      if (/[^a-z]/i.test(letter)) {
        indexOfSign += index;
        for (var i = numbers.length - 1; i >= index; i--) {
          numbers[i + 1] = numbers[i];
        }
        numbers[index] = letter;
      }
    });
        
    var stringWithSign = numbers.reduce((str, value) => str += value, '');
    if (pattern[indexOfSign] === '-') {
      stringWithSign = stringWithSign.split('-');
      console.log(+stringWithSign[0] - +stringWithSign[1]);
    } else if (pattern[indexOfSign] === '+') {
      stringWithSign = stringWithSign.split('+');
      console.log(+stringWithSign[0] + +stringWithSign[1]);
    }
  }
});