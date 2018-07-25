/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = (rooms) => {
  const set = new Set();
  for (let i = 1; i < rooms.length; i++) {
    set.add(i);
  }

  const q = [0];
  while(q.length) {
    const room = rooms[q.shift()];
    while(room.length) {
      const key = room.shift();
      if (set.has(key)) set.delete(key);
      if (!q.includes(key)) q.push(key);
    }
  }

  return set.size > 0 ? false : true;
};
