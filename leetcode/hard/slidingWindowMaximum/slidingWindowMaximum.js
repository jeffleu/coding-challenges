/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = (input, k) => {
  const arr = [];
  let start = 0;
  let end = 0;
  const result = [];
  
  while(end < input.length) {
    if (arr.length) {
      const endValue = input[end];
      while(endValue > input[arr[arr.length - 1]]) arr.pop();
    }
    
    arr.push(end);
    end++;
    
    if (end - start === k) {
      result.push(input[arr[0]]);
      if (arr[0] === start) arr.shift();
      start++;
    }
  }
  
  return result;
};
