/**
 * @param {number[]} T
 * @return {number[]}
 */

/*
Runtime: 180 ms, faster than 52.78% of JavaScript online submissions for Daily Temperatures.
Memory Usage: 42.9 MB, less than 44.44% of JavaScript online submissions for Daily Temperatures.
*/

const dailyTemperatures = T => {
  const result = [];
  const stack = [];
  for (let i = T.length - 1; i >= 0; i--) {
    if (!stack.length) {
      result[i] = 0; // if stack is empty, that means there's no larger temp, so set index to 0
    } else if (T[i] >= T[stack[stack.length - 1]]) {
      // if current temp is larger than top of stack
      while(T[i] >= T[stack[stack.length - 1]]) stack.pop(); // remove all temps in stack that are smaller than current temp as they are no longer relevant
      result[i] = !stack.length ? 0 : stack[stack.length - 1] - i; // if stack is empty, set to 0, otherwise set to top of stack index - current index
    } else if (T[i] < T[stack[stack.length - 1]]) {
      // 
      result[i] = stack[stack.length - 1] - i;
    }
    stack.push(i); // add current index to stack
  }
  return result;
};
