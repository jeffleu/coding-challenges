/**
 * @param {character[][]} board
 * @return {number}
 */
const addCoordinates = (board, r, c, visited) => {
  // Check up
  if (board[r - 1] && board[r - 1][c] === 'X' && !visited.has(`${r - 1} ${c}`)) {
    visited.add(`${r - 1} ${c}`);
    addCoordinates(board, r - 1, c, visited);
  }
      
  // Check right
  if (board[r][c + 1] === 'X' && !visited.has(`${r} ${c + 1}`)) {
    visited.add(`${r} ${c + 1}`);
    addCoordinates(board, r, c + 1, visited);
  }
      
  // Check down
  if (board[r + 1] && board[r + 1][c] === 'X' && !visited.has(`${r + 1} ${c}`)) {
    visited.add(`${r + 1} ${c}`);
    addCoordinates(board, r + 1, c, visited);
  }
    // Check left
  if (board[r][c - 1] === 'X' && !visited.has(`${r} ${c - 1}`)) {
    visited.add(`${r} ${c - 1}`);
    addCoordinates(board, r, c - 1, visited);
  }
};

const countBattleships = board => {
  const visited = new Set();
  let result = 0;
  
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === 'X' && !visited.has(`${r} ${c}`)) {
        visited.add(`${r} ${c}`);
        result++;
        addCoordinates(board, r, c, visited);
      }
    }
  }
  
  return result;
};
