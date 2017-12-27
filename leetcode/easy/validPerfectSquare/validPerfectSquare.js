/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = (num) => {
  for (let i = 1; i <= num; i++) {
    const squared = Math.pow(i, 2);
    if (squared === num) return true;
    if (squared > num) return false;
  }
};
