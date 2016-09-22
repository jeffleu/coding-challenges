var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    var inputArray = line.split('');
    var isAlpha = function(character) {
      if (/[a-z]/i.test(character)) {
        return true;
      }
    };
    var output = '';
    var uppercase = true;
        
    inputArray.forEach(function(char) {
      if (isAlpha(char)) {
        if (uppercase) {
          output += char.toUpperCase();
          uppercase = !uppercase;
        } else {
          output += char.toLowerCase();
          uppercase = !uppercase;
        }
      } else {
        output += char;
      }
          
    });
        
    console.log(output);
  }
});