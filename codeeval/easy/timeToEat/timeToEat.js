var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var inputArray = ((line.split(' ')).sort()).reverse();
    var output = '';
        
    inputArray.forEach(function(time) {
      output += time + ' ';
    });
        
    console.log(output.trim());
  }
});