var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    const reverse = () => line.split('').reverse().join('');
    const add = () => line = (+line + +reverse()).toString();
    var iterations = 0;
    
    while(line !== reverse()) {
      add();
      iterations++;
    }
        
    console.log(iterations, +line);
  }
});