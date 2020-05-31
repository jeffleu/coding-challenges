/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */

/*
Runtime: 148 ms, faster than 35.49% of JavaScript online submissions for Walls and Gates.
Memory Usage: 46.2 MB, less than 100.00% of JavaScript online submissions for Walls and Gates.
*/

const wallsAndGates = rooms => {
  // Get all gate coordinates
  const gateCoordinates = [];
  for (let r = 0; r < rooms.length; r++) {
    for (let c = 0; c < rooms[r].length; c++) {
      if (rooms[r][c] === 0) gateCoordinates.push({r, c});
    }
  }

  let visited = new Set(); // Set to keep track of visited coordinates

  const helper = (r, c, distFromGate = 0) => {
    visited.add(`${r} ${c}`); // Add current coordinate to visited

    // UP
    if (rooms[r - 1] && !visited.has(`${r - 1} ${c}`)) {
      if (rooms[r - 1][c] === 2147483647 || (rooms[r - 1][c] > 0 && rooms[r - 1][c] > distFromGate + 1)) {
        rooms[r - 1][c] = distFromGate + 1;
        helper(r - 1, c, distFromGate + 1);
      }
    }

    // DOWN
    if (rooms[r + 1] && !visited.has(`${r + 1} ${c}`)) {
      if (rooms[r + 1][c] === 2147483647 || (rooms[r + 1][c] > 0 && rooms[r + 1][c] > distFromGate + 1)) {
        rooms[r + 1][c] = distFromGate + 1;
        helper(r + 1, c, distFromGate + 1);
      }
    }

    // RIGHT
    if (rooms[r][c + 1] && !visited.has(`${r} ${c + 1}`)) {
      if (rooms[r][c + 1] === 2147483647 || (rooms[r][c + 1] > 0 && rooms[r][c + 1] > distFromGate + 1)) {
        rooms[r][c + 1] = distFromGate + 1;
        helper(r, c + 1, distFromGate + 1);
      }
    }

    // LEFT
    if (rooms[r][c - 1] && !visited.has(`${r} ${c - 1}`)) {
      if (rooms[r][c - 1] === 2147483647 || (rooms[r][c - 1] > 0 && rooms[r][c - 1] > distFromGate + 1)) {
        rooms[r][c - 1] = distFromGate + 1;
        helper(r, c - 1, distFromGate + 1);
      }
    }

    visited.delete(`${r} ${c}`); // Remove current coordinate from visited
  };

  gateCoordinates.forEach(gate => helper(gate.r, gate.c)); // Pass each gate coordinate to helper function
  return rooms;
};
