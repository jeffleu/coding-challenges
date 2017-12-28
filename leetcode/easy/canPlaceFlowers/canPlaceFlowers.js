/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
  let result = 0;
  
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0 && !flowerbed[i - 1] && !flowerbed[i + 1]) {
      result++;
      flowerbed[i] = 1;
    }
  }
  
  return n <= result;
};
