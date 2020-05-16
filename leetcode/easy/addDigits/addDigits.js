/**
 * @param {number} num
 * @return {number}
 */

/*
Runtime: 68 ms, faster than 86.39% of JavaScript online submissions for Add Digits.
Memory Usage: 36.2 MB, less than 33.33% of JavaScript online submissions for Add Digits.
*/

const addDigits = num => {
  num = num.toString();
  while(num.length > 1) {
    let current = 0;
    for (let i = 0; i < num.length; i++) current += +num[i];
    num = current.toString();
  }
  return +num;
};
