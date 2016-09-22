var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var count = 0;

    while (line > 0) {
      if (line - 5 >= 0) {
        line -= 5;
        count++;
      } else if (line - 3 >= 0) {
        line -= 3;
        count++;
      } else if (line - 1 >= 0) {
        line -= 1;
        count++;
      }
    }
        
    console.log(count);
  }
});