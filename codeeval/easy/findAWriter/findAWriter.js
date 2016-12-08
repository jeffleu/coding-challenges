var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    const letters = (line.split('| '))[0];
    const numbers = ((line.split('| '))[1]).split(' ');
    var output = '';
        
    numbers.forEach(number => {
      output += letters.charAt(number - 1);
    });
        
    console.log(output);
  }
});