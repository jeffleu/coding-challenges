var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    const inputArray = (line.split('')).map(Number);
    const booleanArray = [];
        
    inputArray.forEach((value, index) => {
      var countIndex = 0;
      inputArray.forEach(val => {
        if (val === index) {
          countIndex++;
        }
      });
          
      (value === countIndex) ? booleanArray.push(true) : booleanArray.push(false);
    });
        
    const result = booleanArray.every(value => value);
    (result === true) ? console.log(1) : console.log(0);
  }
});