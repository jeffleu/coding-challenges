/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

/*
Runtime: 68 ms, faster than 60.64% of JavaScript online submissions for Can Place Flowers.
Memory Usage: 37.4 MB, less than 20.00% of JavaScript online submissions for Can Place Flowers.
*/

const canPlaceFlowers = function(flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (!n) break;
    if (!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1]) {
      n--;
      flowerbed[i] = 1;
    }
  }
  return !n ? true : false;
};
