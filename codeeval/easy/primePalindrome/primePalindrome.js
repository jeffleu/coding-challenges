const isPrime = (n) => {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const isPalindrome = (n) => {
  const str = n.toString();
  const reversed = str.split('').reverse().join('');
  return (str === reversed);
};

const getLargestPalindrome = () => {
  let largestPalindrome = 0;
  
  for (var i = 1000; i >= 0; i--) {
    if (i > largestPalindrome) {
      if (isPrime(i) && isPalindrome(i)) {
        largestPalindrome = i;
      }
    }
  }
  
  console.log(largestPalindrome); 
};

getLargestPalindrome();