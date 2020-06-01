/**
 * @param {string} S
 * @return {number}
 */
const minAddToMakeValid = S => {
  const stack = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      stack.push('(');
    } else {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        stack.push(S[i]);
      }
    }
  }
  return stack.length;
};
