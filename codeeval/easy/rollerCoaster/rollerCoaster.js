var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    const isAlpha = (character) => {
      return (/[a-z]/i.test(character)) ? true : false;
    };

    var output = '';
    var uppercase = true;
        
    line.split('').forEach(char => {
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