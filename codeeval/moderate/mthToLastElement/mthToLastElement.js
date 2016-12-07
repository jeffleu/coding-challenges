var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var list = (line.split(' ')).reverse();
    var number = Number(list.shift());
        
    if (list.length < number) return;
        
    console.log(list[number - 1]);
  }
});
