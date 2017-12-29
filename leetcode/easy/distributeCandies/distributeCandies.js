/**
 * @param {number[]} candies
 * @return {number}
 */
const distributeCandies = (candies) => {
  const kinds = new Set();
  candies.forEach(candy => kinds.add(candy));
  return kinds.size >= candies.length / 2 ? candies.length / 2 : kinds.size;
};
