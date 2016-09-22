var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var inputArray = line.split('');
    var numArrows = 0;
        
    for (var i = 0; i < inputArray.length; i++) {
      if (inputArray[i] === '<') {
        if (inputArray[i + 1] === '-') {
          if (inputArray[i + 2] === '-') {
            if (inputArray[i + 3] === '<') {
              if (inputArray[i + 4] === '<') {
                numArrows++;
              }
            }
          }
        }
      } else if (inputArray[i] === '>') {
        if (inputArray[i + 1] === '>') {
          if (inputArray[i + 2] === '-') {
            if (inputArray[i + 3] === '-') {
              if (inputArray[i + 4] === '>') {
                numArrows++;
              }
            }
          }
        }
      }
    }
        
    console.log(numArrows);
  }
});