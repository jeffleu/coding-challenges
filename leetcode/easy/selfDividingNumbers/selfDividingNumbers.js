/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const isSelfDivingNum = (n) => {
  const nums = n.toString();
  
  for (let i = 0; i < nums.length; i++) {
    if (n % +nums[i] !== 0) return false;
  }
  
  return true;
};

const selfDividingNumbers = (left, right) => {
  const result = [];
  
  for (let i = left; i <= right; i++) {
    if (isSelfDivingNum(i)) result.push(i);
  }
  
  return result;
};
