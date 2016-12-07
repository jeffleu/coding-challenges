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
    };
        
    var primeNumbers = '';
    for (var j = 2; j < line; j++) {
      if (isPrime(j)) {
        primeNumbers += j + ',';
      }
    }
        
    console.log(primeNumbers.slice(0, primeNumbers.length - 1));
  }
});