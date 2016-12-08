var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    const isPrime = (n) => {
      for (var i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return n > 1;
    };
        
    var primeNumbers = '';
    for (var j = 2; j < line; j++) {
      if (isPrime(j)) {
        primeNumbers += `${j},`;
      }
    }
        
    console.log(primeNumbers.slice(0, primeNumbers.length - 1));
  }
});