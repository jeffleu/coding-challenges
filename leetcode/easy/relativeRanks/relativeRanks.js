/**
 * @param {number[]} nums
 * @return {string[]}
 */
const findRelativeRanks = (nums) => {
  const result = [];
  const sorted = nums.map((num, index) => ({num, index}))
    .sort((a, b) => b.num - a.num)
    .forEach((n, i) => {
      if (i === 0) {
        result[n.index] = 'Gold Medal';
      } else if (i === 1) {
        result[n.index] = 'Silver Medal';
      } else if (i === 2) {
        result[n.index] = 'Bronze Medal';
      } else {
        result[n.index] = `${i + 1}`;
      }
    });
  
  return result;
};
