/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const findDiagonalOrder = (matrix, r = 0, c = 0, direction = 'up', result = []) => {
  if (!matrix.length) return matrix;    

  result.push(matrix[r][c]);
  
  if (direction === 'up') {
    if (matrix[r - 1] && matrix[r - 1][c + 1] !== undefined) {
      findDiagonalOrder(matrix, r - 1, c + 1, direction, result);
    } else {
      if (matrix[r][c + 1] !== undefined) {
        findDiagonalOrder(matrix, r, c + 1, 'down', result);
      } else if (matrix[r + 1]) {
        findDiagonalOrder(matrix, r + 1, c, 'down', result);
      }
    }
  } else if (direction === 'down') {
    if (matrix[r + 1] && matrix[r + 1][c - 1] !== undefined) {
      findDiagonalOrder(matrix, r + 1, c - 1, direction, result);
    } else {
      if (matrix[r + 1]) {
        findDiagonalOrder(matrix, r + 1, c, 'up', result);
      } else if (matrix[r][c + 1] !== undefined) {
        findDiagonalOrder(matrix, r, c + 1, 'up', result);
      } 
    }
  }
  
  return result;
};
