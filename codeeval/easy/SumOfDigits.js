var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var lineArray = line.split('');
    var output = 0;
        
    lineArray.forEach(function(num) {
      output += Number(num);
    });

    console.log(output);
  }
});