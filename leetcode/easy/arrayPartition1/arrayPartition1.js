/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = nums => {
  const sorted = nums.sort((a, b) => a - b);
  let current = [];
  let result = 0;
  
  while(sorted.length) {
    const currentNum = sorted.shift();
    if (current.length < 2) {
      current.push(currentNum);
    } else {
      result += Math.min(current[0], current[1]);
      current = [currentNum];
    }
  }

  result += Math.min(current[0], current[1]);
  return result;
};
