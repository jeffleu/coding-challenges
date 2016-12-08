var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var count = 0;
    
    for (var i = 0; i < line.length - 4; i++) {
      const arrow = `${line[i]}${line[i+1]}${line[i+2]}${line[i+3]}${line[i+4]}`;
      if (arrow === '<--<<' || arrow === '>>-->') {
        count++;
      }
    }

    console.log(count);
  }
});