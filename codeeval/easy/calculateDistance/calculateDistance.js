var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    line = line.split('').splice(1, line.length - 2).join('').split(') (').toString ().split(',').map(Number);
      var x1 = line[0];
      var x2 = line[2];
      var y1 = line[1];
      var y2 = line[3];
    
      var distance = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    
      console.log(distance);
  }
});