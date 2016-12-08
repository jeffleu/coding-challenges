var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    const string = (line.split(', ')[0]).split('');
    var remove = (line.split(', ')[1]).split('');
        
    remove.forEach(letter => {
      for (var i = 0; i < string.length; i++) {
        if (letter === string[i]) {
          string.splice(i, 1);
        }
      }
    });
        
    console.log(string.join(''));
  }
});