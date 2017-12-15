/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (arr) => {
  const charCount = {};
  const result = {value: null, count: -Infinity};
  
  for (let i = 0; i < arr.length; i++) {
    charCount[arr[i]] = !charCount.hasOwnProperty(arr[i]) ? 1 : charCount[arr[i]] + 1;
    
    if (charCount[arr[i]] > result.count) {
      result.value = arr[i];
      result.count = charCount[arr[i]];
    }
  }
  
  return result.value;
};
