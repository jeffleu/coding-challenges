var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var lineArray = line.split('');
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var alphabetArray = alphabet.split('');
    var output = '';

    for (var i = 0; i < lineArray.length; i++) {
      for (var j = 0; j < alphabetArray.length; j++) {
        if (lineArray[i] === alphabetArray[j]) {
          output += alphabetArray[j];
      
          if (alphabet.indexOf(lineArray[i + 1]) === -1) {
            output += ' ';
          }
        }
      }
    }

    console.log(output.toLowerCase());
  }
});