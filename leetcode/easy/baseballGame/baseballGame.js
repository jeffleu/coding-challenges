/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = (ops) => {
  let result = 0;
  const stack = [];

  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    let toAdd = 0;

    if (/[0-9]/.test(op)) toAdd = Number(op);
    if (op === 'D') toAdd = stack[stack.length - 1] * 2;

    if (op === '+') {
      const num1 = stack[stack.length - 1] || 0;
      const num2 = stack[stack.length - 2] || 0;
      toAdd = num1 + num2;
    }

    if (op === 'C') {
      result -= stack.pop();
      continue;
    }

    result += toAdd;
    stack.push(toAdd);
  }

  return result;
};
