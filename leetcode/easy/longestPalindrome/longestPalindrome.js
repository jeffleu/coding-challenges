/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
  const set = new Set();
  let count = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      set.delete(s[i]);
      count += 2;
    } else {
      set.add(s[i]);
    }
  }
  
  return set.size === 0 ? count : count + 1;
};
