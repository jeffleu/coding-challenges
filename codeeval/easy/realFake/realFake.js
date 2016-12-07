var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    // put string into an array without spaces
    var inputArray = ((line.split(' ')).reduce(function(str, group) {
      return str += group;
    }, '')).split('');
        
    var total = 0;
        
    for (var i = 0; i < inputArray.length; i++) {
      // if index is even, double the number and add to total
      if (i % 2 === 0) {
        total += (Number(inputArray[i]) * 2);
      } else {
        // if index isn't even (odd), add number to total
        total += Number(inputArray[i]);
      }
    }
        
    if (total % 10 === 0) {
      console.log('Real');
    } else {
      console.log('Fake')
    }
  }
});