/*
  Description: 
  Given an array of integers as strings and numbers, return the sum
  of the array values as if all were numbers. Return your answer as 
  a number.
*/

function sumMix(array) {
	return array.map(n => Number(n)).reduce((total, n) => total += n, 0);
}