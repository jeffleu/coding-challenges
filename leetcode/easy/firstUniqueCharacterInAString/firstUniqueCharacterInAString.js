/**
 * @param {string} s
 * @return {number}
 */

const firstUniqChar = (s) => {
  const letterCount = {};
  
  for (let i = 0; i < s.length; i++) {
    letterCount[s[i]] = !letterCount.hasOwnProperty(s[i]) ? 1 : letterCount[s[i]] + 1;
  }
  
  for (let i = 0; i < s.length; i++) {
    if (letterCount[s[i]] === 1) return i;
  }
};
