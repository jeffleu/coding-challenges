const findDigit = function(num, nth) {
  if (nth === 0) { return -1 }
  
  let reverseString = num.toString().split('').reverse();
  return (+reverseString[nth - 1]) ? +reverseString[nth - 1] : 0;
};