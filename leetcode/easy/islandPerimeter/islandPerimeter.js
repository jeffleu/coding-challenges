/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = grid => {
  let result = 0;
  
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 1) {
        if (!grid[r - 1] || grid[r - 1] && grid[r - 1][c] === 0) result++; // Check up
        if (!grid[r][c + 1] || grid[r][c + 1] && grid[r][c + 1] === 0) result++; // Check right
        if (!grid[r + 1] || grid[r + 1] && grid[r + 1][c] === 0) result++; // Check down
        if (!grid[r][c - 1] || grid[r][c - 1] && grid[r][c - 1] === 0) result++; // Check left
      }
    }
  }
  
  return result;
};
