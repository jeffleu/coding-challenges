var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var isPrime = function(num) {
      for (var i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    }
        
    var n = Number(line.split(',')[0]);
    var m = Number(line.split(',')[1]);
    var numPrimes = 0;
        
    for (var j = n; j <= m; j++) {
      if (isPrime(j)) {
        numPrimes++;
      }
    }
        
    console.log(numPrimes);
  }
});