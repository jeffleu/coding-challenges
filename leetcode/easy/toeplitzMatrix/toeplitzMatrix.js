/**
 * @param {number[][]} matrix
 * @return {boolean}
 */

/*
Runtime: 76 ms, faster than 34.41% of JavaScript online submissions for Toeplitz Matrix.
Memory Usage: 38.2 MB, less than 25.00% of JavaScript online submissions for Toeplitz Matrix.
*/

const isToeplitzMatrix = matrix => {
  for (let r = matrix.length - 1; r >= 0; r--) {
    let row = r;
    let col = 0;
    while(matrix[row] && col <= matrix[0].length - 1) {
      if (matrix[row + 1] && col + 1 <= matrix[0].length - 1) {
        if (matrix[row + 1][col + 1] !== matrix[row][col]) return false;
      }
      row++;
      col++;
    }
  }

  for (let c = 1; c <= matrix[0].length - 1; c++) {
    let row = 0;
    let col = c;
    while(matrix[row] && matrix && col <= matrix[0].length - 1) {
      if (matrix[row + 1] && col + 1 <= matrix[0].length - 1) {
        if (matrix[row][col] !== matrix[row + 1][col + 1]) return false;
      }
      row++;
      col++;
    }
  }

  return true;
};
