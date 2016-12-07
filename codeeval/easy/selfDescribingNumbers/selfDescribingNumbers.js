var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var inputArray = (line.split('')).map(Number);
    var booleanArray = [];
        
    inputArray.forEach(function(value, index) {
      var countIndex = 0;
          
      inputArray.forEach(function(val) {
        if (val === index) {
          countIndex++;
        }
      });
          
      if (value === countIndex) {
        booleanArray.push(true);
      } else {
        booleanArray.push(false);
      }
    });
        
    var result = booleanArray.every(function(value) {
      return value;
    });
        
    if (result === true) {
      console.log(1);
    } else {
      console.log(0);
    }
  }
});