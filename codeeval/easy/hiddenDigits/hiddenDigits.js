var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var output = '';
    var inputArray = line.split('');
    inputArray.forEach(function(char) {
      if (char === 'a' || char === '0') {
        output += '0';
      } else if (char === 'b' || char === '1') {
        output += '1';
      } else if (char === 'c' || char === '2') {
        output += '2';
      } else if (char === 'd' || char === '3') {
        output += '3';
      } else if (char === 'e' || char === '4') {
        output += '4';
      } else if (char === 'f' || char === '5') {
        output += '5';
      } else if (char === 'g' || char === '6') {
        output += '6';
      } else if (char === 'h' || char === '7') {
        output += '7';
      } else if (char === 'i' || char === '8') {
        output += '8';
      } else if (char === 'j' || char === '9') {
        output += '9';
      }
    });
        
    if (!output) {
      console.log('NONE');
    } else {
      console.log(output);
    }
  }
});