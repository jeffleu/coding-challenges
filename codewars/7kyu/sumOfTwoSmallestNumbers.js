/*
  Description:
  Create a function that returns the sum of the two lowest positive numbers given 
  an array of minimum 4 integers. No floats or empty arrays will be passed.

  Create a function that calculates the sum of the two lowest numbers given an 
  array of positive integers.

  Examples:
  sumTwoSmallestNumbers([5, 8, 12, 19, 22]); // 13
  sumTwoSmallestNumbers([15, 28, 4, 2, 43]); // 6
  sumTwoSmallestNumbers([3, 87, 45, 12, 7]); // 10
  sumTwoSmallestNumbers([23, 71, 33, 82, 1]); // 24
  sumTwoSmallestNumbers([52, 76, 14, 12, 4]); // 16

*/

function sumTwoSmallestNumbers(numbers) {  
  numbers = numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

