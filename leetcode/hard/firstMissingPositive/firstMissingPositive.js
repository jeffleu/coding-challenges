/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = (arr) => {
  if (!arr.length) return 1;
    
  for (let i = 0; i < arr.length; i++) {
    while(arr[i] !== undefined && arr[i] !== i) {
      const num = arr[i];
      
      if (arr[num] !== num) {
        [arr[i], arr[num]] = [arr[num], arr[i]];
      } else {
        arr[i] = undefined;
      }
    }
  }
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === undefined) return i;
  }
  
  return arr.length;
};
