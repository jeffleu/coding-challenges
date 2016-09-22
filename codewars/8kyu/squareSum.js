/*
  Description:
  Complete the squareSum method so that it squares each number passed
  into it and then sums the results together.

  Example:
  squareSum([1, 2, 2]); // 9
*/

function squareSum(numbers) {
  return numbers.reduce((total, num) => total + Math.pow(num, 2), 0);
}