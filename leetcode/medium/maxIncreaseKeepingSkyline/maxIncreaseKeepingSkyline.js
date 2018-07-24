/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxIncreaseKeepingSkyline = (grid) => {
  const rowMax = [];
  const colMax = [];

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (!rowMax[r] || rowMax[r] < grid[r][c]) rowMax[r] = grid[r][c];
      if (!colMax[c] || colMax[c] < grid[r][c]) colMax[c] = grid[r][c];
    }
  }

  let result = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      result += Math.min(rowMax[r], colMax[c]) - grid[r][c];
    }
  }

  return result;
};
