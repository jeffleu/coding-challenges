/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
  const reverse = Number(`${x}`.split('').reverse().join(''));
  return x === reverse;
};
