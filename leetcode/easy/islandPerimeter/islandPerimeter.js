/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = (grid) => {
  let result = 0;
  
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 1) {
        if (!grid[r - 1] || !grid[r - 1][c]) result++;
        if (!grid[r + 1] || !grid[r + 1][c]) result++;
        if (!grid[r][c - 1]) result++;
        if (!grid[r][c + 1]) result++;
      }
    }
  }
  
  return result;
};
