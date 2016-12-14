var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {        
    const mapping = {
      a: 0,
      b: 1,
      c: 2,
      d: 3,
      e: 4,
      f: 5,
      g: 6,
      h: 7,
      '1': 7,
      '2': 6,
      '3': 5,
      '4': 4,
      '5': 3,
      '6': 2,
      '7': 1,
      '8': 0
    };

    const createBoard = () => {
      const board = [];
      
      for (var r = 0; r < 8; r++) {
        const row = [];
        for (var c = 0; c < 8; c++) {
          row.push(0);
        }
        board.push(row);
      }
      
      return board;
    };

    const knightMoves = (position) => {
      position = position.split('');
      const knight = {
        row: mapping[position[1]],
        column: mapping[position[0]]
      };
      const board = createBoard();
      const moves = [];
      
      // Two rows above
      if (board[knight.row - 2]) {
        if (board[knight.row - 2][knight.column - 1] !== undefined) {
          moves.push([knight.row - 2, knight.column - 1]);
        }
        
        if (board[knight.row - 2][knight.column + 1] !== undefined) {
          moves.push([knight.row - 2, knight.column + 1]);
        }
      }
      
      // One row above
      if (board[knight.row - 1]) {
        if (board[knight.row - 1][knight.column - 2] !== undefined) {
          moves.push([knight.row - 1, knight.column - 2]);
        }
        
        if (board[knight.row - 1][knight.column + 2] !== undefined) {
          moves.push([knight.row - 1, knight.column + 2]);
        }
      }
      
      // One row below
      if (board[knight.row + 1]) {
        if (board[knight.row + 1][knight.column - 2] !== undefined) {
          moves.push([knight.row + 1, knight.column - 2]);
        }
        
        if (board[knight.row + 1][knight.column + 2] !== undefined) {
          moves.push([knight.row + 1, knight.column + 2]);
        }
      }
      
      // Two rows below
      if (board[knight.row + 2]) {
        if (board[knight.row + 2][knight.column - 1] !== undefined) {
          moves.push([knight.row + 2, knight.column - 1]);
        }
        
        if (board[knight.row + 2][knight.column + 1] !== undefined) {
          moves.push([knight.row + 2, knight.column + 1]);
        }
      }

      return moves.map(move => {
        var row = move[0];
        var column = move[1];
        var mapping = '';
        
        if (column === 0) {
          mapping += 'a';
        } else if (column === 1) {
          mapping += 'b';
        } else if (column === 2) {
          mapping += 'c';
        } else if (column === 3) {
          mapping += 'd';
        } else if (column === 4) {
          mapping += 'e';
        } else if (column === 5) {
          mapping += 'f';
        } else if (column === 6) {
          mapping += 'g';
        } else if (column === 7) {
          mapping += 'h';
        }
        
        if (row === 0) {
          mapping += '8';
        } else if (row === 1) {
          mapping += '7';
        } else if (row === 2) {
          mapping += '6';
        } else if (row === 3) {
          mapping += '5';
        } else if (row === 4) {
          mapping += '4';
        } else if (row === 5) {
          mapping += '3';
        } else if (row === 6) {
          mapping += '2';
        } else if (row === 7) {
          mapping += '1';
        }
        
        return mapping;
      }).filter(n => isNaN(Number(n))).sort().join(' ');
    };

    console.log(knightMoves(line));      
  }
});