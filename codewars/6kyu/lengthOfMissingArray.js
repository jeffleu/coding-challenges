/*
  Description:
  You get an array of arrays. If you sort the arrays by their length, you
  will see, that their length-values are consecutive. But one array is missing!

  You have to write a method, that return the length of the missing array.

  If the array of arrays is null, return 0. When an array in the array is null 
  or empty, return 0 too!
  
  There will always be a missing element and its length will be always between 
  the given arrays. 

  Example:
  [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
*/

function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays === null || arrayOfArrays.length === 0 || arrayOfArrays.includes(null)) { return 0; }
  
  let arrayLengths = arrayOfArrays.map(n => n.length).sort((a, b) => a - b);

  if (arrayLengths.includes(0)) { return 0; }

  for (let i = arrayLengths[0]; i <= arrayLengths[arrayLengths.length - 1]; i++) {
    if (arrayLengths.indexOf(i) === -1) { return i; } 
  }
}