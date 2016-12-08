var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    const inputArray = line.split(' ');
    const numOccur = inputArray.reduce((obj, num) => {
      (!obj[num]) ? obj[num] = 1 : obj[num]++;
      return obj;
    }, {});
        
    var winningPlayer = '';    
    for (var key in numOccur) {
      if (numOccur[key] === 1) {
        winningPlayer = inputArray.indexOf(key) + 1;
        break;
      }
    }
        
    (winningPlayer !== '') ? console.log(winningPlayer) : console.log(0);
  }
});