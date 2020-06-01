/**
 * @param {string} s
 * @return {number}
 */
const calculate = s => {
  s = s.replace(/[\s]/g, '');
  let numsAndOps = [];
  let start = 0;
  let end = 0;
  while(end < s.length) {
    if (!/[+-/*]/.test(s[end])) {
      end++;
    } else {
      numsAndOps.push(Number(s.slice(start, end)), s[end]);
      end++;
      start = end;
    }
  }
  numsAndOps.push(Number(s.slice(start, end)));

  const stack = [];
  let sign = '+';
  for (let i = 0; i < numsAndOps.length; i++) {
    if (Number.isInteger(numsAndOps[i])) {
      if (sign === '+') stack.push(numsAndOps[i]);
      if (sign === '-') stack.push(-numsAndOps[i]);
      if (sign === '/') {
        if (stack[stack.length - 1] > 0) stack.push(Math.floor(stack.pop() / numsAndOps[i]));
        else stack.push(-Math.floor(stack.pop() * -1 / numsAndOps[i]));
      }
      if (sign === '*') stack.push(stack.pop() * numsAndOps[i]);
    } else {
      sign = numsAndOps[i];
    }
  }
  return stack.reduce((total, num) => total + num, 0);
};
