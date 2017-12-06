/**
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = (str) => {
  const arr = str.replace(/01/g, '0 1').replace(/10/g, '1 0').split(' ').map(n => n.length);
    
  let result = 0;
  for (let i = 1; i < arr.length; i++) {
    result += Math.min(arr[i], arr[i - 1]);
  }
  return result;
};
