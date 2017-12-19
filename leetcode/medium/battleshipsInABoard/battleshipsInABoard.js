/**
 * @param {character[][]} board
 * @return {number}
 */
const helper = (board, r, c, visited) => {
  visited.add(`${r} ${c}`);
  if (board[r - 1] && board[r - 1][c] === 'X' && !visited.has(`${r - 1} ${c}`)) helper(board, r - 1, c, visited);
  if (board[r + 1] && board[r + 1][c] === 'X' && !visited.has(`${r + 1} ${c}`)) helper(board, r + 1, c, visited);
  if (board[r][c - 1] === 'X' && !visited.has(`${r} ${c - 1}`)) helper(board, r, c - 1, visited);
  if (board[r][c + 1] === 'X' && !visited.has(`${r} ${c + 1}`)) helper(board, r, c + 1, visited);
};

const countBattleships = (board) => {
  const visited = new Set();
  
  let result = 0;
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === 'X' && !visited.has(`${r} ${c}`)) {
        helper(board, r, c, visited);
        result++;
      }
    }
  }
  return result;
};
