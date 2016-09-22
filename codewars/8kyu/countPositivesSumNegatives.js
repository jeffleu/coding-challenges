/*
  Description:
  Given an array of integers, return an array, where the first element is the count
  of positives numbers and the second element is sum of negative numbers.

  If the input array is empty or null, return an empty array.

  Example:
  countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]); // [10, -65]
*/

function countPositivesSumNegatives(input) {
  if (input === undefined || input === null || input.length === 0) {
    return []; 
  } 
  
  return input.reduce((results, n) => {
    (n > 0) ? results[0]++ : results[1] += n;
    return results;
  }, [0, 0]);
}