/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = (matrix, row, col) => {
  if (matrix.length * matrix[0].length !== row * col) return matrix;
  
  const result = [];
  let currentRow = [];
  
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      currentRow.push(matrix[r][c]);
      if (currentRow.length === col) {
        result.push(currentRow);
        currentRow = [];
      }
    }
  }
  
  return result;
};
