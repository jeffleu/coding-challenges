/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const mirrorReverse = (arr, start = 0, end = arr.length - 1) => {
  while(start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};

const reverseStr = (str, k) => {
  const arr = str.split('');
  
  let start = 0;
  
  while(start < arr.length) {
    const end = Math.min(start + k - 1, arr.length - 1);
    mirrorReverse(arr, start, end);
    start += 2 * k;
  }
  
  return arr.join('');
};
