/**
 * @param {string} input
 * @return {number}
 */
const lengthLongestPath = (input) => {
  const stack = [0];
  let maxLen = 0;
    
  input.split('\n').forEach(s => {
    const level = s.lastIndexOf('\t') + 1;
    while(level + 1 < stack.length) stack.pop();
    const len = stack[stack.length - 1] + s.length - level + 1;
    stack.push(len);
    if (s.includes('.') && len - 1 > maxLen) maxLen = len - 1;
  });
    
  return maxLen;
};
