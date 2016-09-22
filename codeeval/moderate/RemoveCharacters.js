var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var string = (line.split(', ')[0]).split('');
    var remove = (line.split(', ')[1]).split('');
        
    remove.forEach(function(letter) {
      for (var i = 0; i < string.length; i++) {
        if (letter === string[i]) {
          delete string[i];
        }
      }
    });
        
    var output = '';
    string.forEach(function(char) {
      output += char;
    });
        
    console.log(output);
  }
});