var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var output = '';
        
    line.split('').forEach(letter => {
      if (letter !== output[output.length - 1]) {
        output += letter;
      }
    });
        
    console.log(output);
  }
});