/**
 * @param {string} num
 * @return {boolean}
 */

/*
Runtime: 64 ms, faster than 22.48% of JavaScript online submissions for Strobogrammatic Number.
Memory Usage: 33 MB, less than 100.00% of JavaScript online submissions for Strobogrammatic Number.
*/

const isStrobogrammatic = num => {
  if (/[23457]/.test(num)) return false;
  let flipped = '';
  num = num.toString();
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] === '0' || num[i] === '1' || num[i] === '8') flipped += num[i];
    if (num[i] === '6') flipped += '9';
    if (num[i] === '9') flipped += '6';
  }
  return num === flipped;
};
