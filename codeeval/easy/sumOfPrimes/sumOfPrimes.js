const isPrime = (n) => {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const getSumOfPrimes = () => {
  const primeNumbers = [];
  var currentNum = 2;
  
  while(primeNumbers.length < 1000) {
    if (isPrime(currentNum)) {
      primeNumbers.push(currentNum);
    }
    currentNum++;
  }
  
  const total = primeNumbers.reduce((total, n) => total + n, 0);
  console.log(total);
};

getSumOfPrimes();