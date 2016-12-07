var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    var letters = (line.split('| '))[0];
    var numbers = ((line.split('| '))[1]).split(' ');
    var output = '';
        
    numbers.forEach(function(number) {
      output += letters.charAt(number - 1);
    });
        
    console.log(output);
  }
});