var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    const x = Number(line.split(',')[0]);
    const n = Number(line.split(',')[1]);
    
    var total = n;
    while (total < x) {
      total += n;
    }
        
    console.log(total);
  }
});