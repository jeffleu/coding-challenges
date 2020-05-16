/**
 * @param {number} n
 * @return {number}
 */

/*
Runtime: 88 ms, faster than 61.38% of JavaScript online submissions for Arranging Coins.
Memory Usage: 36.6 MB, less than 33.33% of JavaScript online submissions for Arranging Coins.
*/

const arrangeCoins = n => {
  let coinsLeft = n;
  let step = 0;
  while(step < coinsLeft) {
    step++;
    coinsLeft -= step;
  }
  return step;
};
