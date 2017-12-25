/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let result = 0;
  
  for (let i = 0; i < s.length; i++) {
    const chars = new Set([s[i]]);
    let end = i + 1;
    
    while(end < s.length) {
      const endChar = s[end];
      if (chars.has(endChar)) break;
      chars.add(endChar);
      end++;
    }

    const substrLength = end - i;
    if (substrLength > result) result = substrLength;
  }
  
  return result;
};
