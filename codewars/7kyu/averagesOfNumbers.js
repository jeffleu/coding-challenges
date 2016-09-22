/*
  Description:
  Write a method, that gets an array of numbers and return an array of the
  averages of each number and his follower, if there is one.

  If the array has 0 or 1 values or is null, your method should return an empty array.

  Example:
  averages([ 1, 3, 5, 1, -10]); // [ 2, 4, 3, -4.5]
*/

function averages(numbers) {
  if (numbers === null || numbers.length === 0 || numbers.length === 1) { return [] }
  
  let avg = [];
  
  for (let i = 0; i < numbers.length; i++) {
    // If not the last number in array, get average of current and next
    if (i !== numbers.length - 1) {
      avg.push((numbers[i] + numbers[i + 1]) / 2);
    }
  }
  
  return avg;
}