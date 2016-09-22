/*
  Description:
  You have an array of numbers. Your task is to sort ascending odd
  numbers but even numbers must be on their places. 

  Zero isn't an odd number and you don't need to move it. If you have
  an empty array, you need to return it.

  Example:
  sortArray([5, 3, 2, 8, 1, 4]); // [1, 3, 2, 8, 5, 4]
*/

function sortArray(array) {
  if (array.length === 0) { return array; }
  
  let indexOfOddNums = [];
  let oddNums = [];

  array.forEach((char, index) => {
    if (char % 2 !== 0) {
      indexOfOddNums.push(index);
      oddNums.push(char);
    }
  });
  
  oddNums = oddNums.sort((a, b) => a - b);
  indexOfOddNums.forEach(n => { array[n] = oddNums.shift() });
  return array;
}