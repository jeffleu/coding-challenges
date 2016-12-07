var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var inputArray = line.split(' ');

    var numOccur = inputArray.reduce(function(obj, num) {
      if (!obj[num]) {
        obj[num] = 1;
      } else {
        obj[num]++;
      }
          
      return obj;
    }, {});
        
    var winningPlayer = '';
        
    for (var key in numOccur) {
      if (numOccur[key] === 1) {
        // console.log(inputArray.indexOf(key) + 1);
        winningPlayer = inputArray.indexOf(key) + 1;
        break;
      }
    }
        
    if (winningPlayer !== '') {
      console.log(winningPlayer);
    } else {
      console.log(0)
    }
  }
});