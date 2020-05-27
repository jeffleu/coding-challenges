/**
 * @param {string[]} words
 * @return {number}
 */

/*
Runtime: 128 ms, faster than 71.85% of JavaScript online submissions for Longest String Chain.
Memory Usage: 43.5 MB, less than 100.00% of JavaScript online submissions for Longest String Chain.
*/

const longestStrChain = words => {
  words = words.sort((a, b) => a.length - b.length);
  let result = 1;
  const set = new Set(words);

  const helper = (str, chainLength = 1) => {
    if (!set.has(str)) return;
    result = Math.max(result, chainLength);
    
    for (let i = 0; i < str.length; i++) {
      // remove letter at i and pass string to helper function
      const left = str.slice(0, i);
      const right = str.slice(i + 1);
      helper(left + right, chainLength + 1);
    }
  }

  for (let i = words.length - 1; i >= 0; i--) {
    helper(words[i]);
  }

  return result;
};
