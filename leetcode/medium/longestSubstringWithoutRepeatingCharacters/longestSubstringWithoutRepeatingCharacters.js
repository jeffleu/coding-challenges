/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  const len = s.length;
  let result = 0;
  let start = 0;
  let end = 0;
  const set = new Set();

  while(start < len && end < len) {
    if (!set.has(s[end])) {
      set.add(s[end]);
      end++;
      result = Math.max(result, end - start);
    } else {
      set.delete(s[start]);
      start++;
    }
  }
  
  return result;
};
