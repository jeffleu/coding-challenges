/**
 * @param {number} n
 * @return {number[][]}
 */

/*
Runtime: 164 ms, faster than 75.56% of JavaScript online submissions for Factor Combinations.
Memory Usage: 38.8 MB, less than 100.00% of JavaScript online submissions for Factor Combinations.
*/

const getFactors = n => {
  const div = [];
  for (let i = 2; i < n; i++) {
    if (n % i === 0) div.push(i);
  }
  const result = [];
  const helper = (index = 0, factors = [], currentProduct = 1) => {
    if (index >= div.length || currentProduct > n) return;
    if (currentProduct === n) result.push(factors);
    for (let i = index; i < div.length; i++) {
      helper(i, factors.concat(div[i]), currentProduct * div[i]);
    }
  }
  helper();
  return result;
};
