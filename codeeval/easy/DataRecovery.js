var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var scrambled = (line.split(';')[0]).split(' ');

    var numbers = ((line.split(';')[1]).split(' ')).map(Number);
    for (var i = 1; i <= scrambled.length; i++) {
      if (numbers.indexOf(i) === -1) {
        numbers.push(i);
      }
    }
        
    var outputArray = [];
    for (var i = 0; i < scrambled.length; i++) {
      outputArray[numbers[i]] = scrambled[i];
    }
        
    var output = '';
    outputArray.forEach(function(word) {
      output += word + ' ';
    });
        
    console.log(output.trim());
  }
});