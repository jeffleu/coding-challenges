/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
const maxCount = (m, n, ops) => {
  if (!ops.length) return m * n;
  let minRow = Infinity;
  let minCol = Infinity;
  
  for (let i = 0; i < ops.length; i++) {
    const row = ops[i][0];
    const col = ops[i][1];
    if (row < minRow) minRow = row;
    if (col < minCol) minCol = col;
  }
  
  return minRow * minCol;
};
