/**
 * @param {string[]} tokens
 * @return {number}
 */

/*
Runtime: 80 ms, faster than 26.36% of JavaScript online submissions for Evaluate Reverse Polish Notation.
Memory Usage: 40.1 MB, less than 100.00% of JavaScript online submissions for Evaluate Reverse Polish Notation.
*/

const evalRPN = tokens => {
  if (!tokens.length) return 0;
  const stack = [];
  for (const token of tokens) {
    if (/[0-9]/.test(token)) {
      stack.push(Number(token));
    } else {
      const right = stack.pop();
      const left = stack.pop();
      if (token === '+') {
        stack.push(left + right);
      } else if (token === '-') {
        stack.push(left - right);
      } else if (token === '*') {
        stack.push(left * right);
      } else if (token === '/') {
        let total = left / right;
        total = total > 0 ? Math.floor(total) : Math.ceil(total);
        stack.push(total);
      }
    }
  }
  return stack[0];
};
