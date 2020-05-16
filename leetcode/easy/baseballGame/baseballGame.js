/**
 * @param {string[]} ops
 * @return {number}
 */
// const calPoints = (ops) => {

/*
Runtime: 56 ms, faster than 70.62% of JavaScript online submissions for Baseball Game.
Memory Usage: 34.7 MB, less than 100.00% of JavaScript online submissions for Baseball Game.
*/

const calPoints = ops => {
  const queue = [];
  let result = 0;
  ops.forEach(op => {
    if (op === '+') {
      const sum = queue[queue.length - 1] + queue[queue.length - 2];
      queue.push(sum);
      result += sum;
    } else if (op === 'D') {
      const double = queue[queue.length - 1] * 2;
      queue.push(double);
      result += double;
    } else if (op === 'C') {
      result -= queue.pop();
    } else {
      op = Number(op);
      queue.push(op);
      result += op;
    }
  });
  return result;
};
