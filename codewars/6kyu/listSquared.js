/*
  Description:
  Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 
  1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 
  which is 50 * 50, a square!

  Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

  The result will be an array of arrays, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

  Examples:

  listSquared(1, 250); // [[1, 1], [42, 2500], [246, 84100]]
  listSquared(42, 250); // [[42, 2500], [246, 84100]]
*/

function getSumOfSquaredDivisors(n) {
  if (n === 1) { return 1; }
  
  let divisors = [];
  
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) { divisors.push(i); }
  }

  return divisors.map(n => n * n).reduce((total, n) => total += n, 0);
}

function listSquared(m, n) {
  let results = [];

  for (let i = m; i <= n; i++) {
    if (Math.sqrt(getSumOfSquaredDivisors(i)) % 1 === 0) {
      results.push([i, getSumOfSquaredDivisors(i)]);
    }
  }
  
  return results;
}