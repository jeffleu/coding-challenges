const minDistance = (str1, str2) => {
  const matrix = [];
  
  for (let r = 0; r <= str1.length; r++) {
    matrix[r] = [];
    for (let c = 0; c <= str2.length; c++) {
      if (r === 0) {
        matrix[r][c] = c;
      } else if (c === 0) {
        matrix[r][c] = r;
      } else if (str1[r - 1] === str2[c - 1]) {
        matrix[r][c] = matrix[r - 1][c - 1];
      } else {
        matrix[r][c] = Math.min(matrix[r][c - 1], matrix[r - 1][c - 1], matrix[r - 1][c]) + 1;
      }
    }
  }
  
  matrix.forEach(row => console.log(row));
  return matrix[str1.length][str2.length];
};
