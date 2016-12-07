var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var string = line.split(',')[0];
    var letter = line.split(',')[1];
    var output = '';
    var isFound = false;
        
    for (var i = string.length - 1; i >= 0; i--) {
      if (letter === string[i]) {
        output = i;
        isFound = true;
        break;
      }
    }
        
    if (!isFound) {
      console.log(-1);
    } else {
      console.log(output);
    }    
  }
});