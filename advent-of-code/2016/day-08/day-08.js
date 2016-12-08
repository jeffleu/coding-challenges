const givenInstructions = `rect 1x1|rotate row y=0 by 7|rect 1x1|rotate row y=0 by 5|rect 1x1|rotate row y=0 by 5|rect 1x1|rotate row y=0 by 2|rect 1x1|rotate row y=0 by 3|rect 1x1|rotate row y=0 by 5|rect 1x1|rotate row y=0 by 3|rect 1x1|rotate row y=0 by 2|rect 1x1|rotate row y=0 by 3|rect 2x1|rotate row y=0 by 7|rect 6x1|rotate row y=0 by 3|rect 2x1|rotate row y=0 by 2|rect 1x2|rotate row y=1 by 10|rotate row y=0 by 3|rotate column x=0 by 1|rect 2x1|rotate column x=20 by 1|rotate column x=15 by 1|rotate column x=5 by 1|rotate row y=1 by 5|rotate row y=0 by 2|rect 1x2|rotate row y=0 by 5|rotate column x=0 by 1|rect 4x1|rotate row y=2 by 15|rotate row y=0 by 5|rotate column x=0 by 1|rect 4x1|rotate row y=2 by 5|rotate row y=0 by 5|rotate column x=0 by 1|rect 4x1|rotate row y=2 by 10|rotate row y=0 by 10|rotate column x=8 by 1|rotate column x=5 by 1|rotate column x=0 by 1|rect 9x1|rotate column x=27 by 1|rotate row y=0 by 5|rotate column x=0 by 1|rect 4x1|rotate column x=42 by 1|rotate column x=40 by 1|rotate column x=22 by 1|rotate column x=17 by 1|rotate column x=12 by 1|rotate column x=7 by 1|rotate column x=2 by 1|rotate row y=3 by 10|rotate row y=2 by 5|rotate row y=1 by 3|rotate row y=0 by 10|rect 1x4|rotate column x=37 by 2|rotate row y=3 by 18|rotate row y=2 by 30|rotate row y=1 by 7|rotate row y=0 by 2|rotate column x=13 by 3|rotate column x=12 by 1|rotate column x=10 by 1|rotate column x=7 by 1|rotate column x=6 by 3|rotate column x=5 by 1|rotate column x=3 by 3|rotate column x=2 by 1|rotate column x=0 by 1|rect 14x1|rotate column x=38 by 3|rotate row y=3 by 12|rotate row y=2 by 10|rotate row y=0 by 10|rotate column x=7 by 1|rotate column x=5 by 1|rotate column x=2 by 1|rotate column x=0 by 1|rect 9x1|rotate row y=4 by 20|rotate row y=3 by 25|rotate row y=2 by 10|rotate row y=0 by 15|rotate column x=12 by 1|rotate column x=10 by 1|rotate column x=8 by 3|rotate column x=7 by 1|rotate column x=5 by 1|rotate column x=3 by 3|rotate column x=2 by 1|rotate column x=0 by 1|rect 14x1|rotate column x=34 by 1|rotate row y=1 by 45|rotate column x=47 by 1|rotate column x=42 by 1|rotate column x=19 by 1|rotate column x=9 by 2|rotate row y=4 by 7|rotate row y=3 by 20|rotate row y=0 by 7|rotate column x=5 by 1|rotate column x=3 by 1|rotate column x=2 by 1|rotate column x=0 by 1|rect 6x1|rotate row y=4 by 8|rotate row y=3 by 5|rotate row y=1 by 5|rotate column x=5 by 1|rotate column x=4 by 1|rotate column x=3 by 2|rotate column x=2 by 1|rotate column x=1 by 3|rotate column x=0 by 1|rect 6x1|rotate column x=36 by 3|rotate column x=25 by 3|rotate column x=18 by 3|rotate column x=11 by 3|rotate column x=3 by 4|rotate row y=4 by 5|rotate row y=3 by 5|rotate row y=2 by 8|rotate row y=1 by 8|rotate row y=0 by 3|rotate column x=3 by 4|rotate column x=0 by 4|rect 4x4|rotate row y=4 by 10|rotate row y=3 by 20|rotate row y=1 by 10|rotate row y=0 by 10|rotate column x=8 by 1|rotate column x=7 by 1|rotate column x=6 by 1|rotate column x=5 by 1|rotate column x=3 by 1|rotate column x=2 by 1|rotate column x=1 by 1|rotate column x=0 by 1|rect 9x1|rotate row y=0 by 40|rotate column x=44 by 1|rotate column x=35 by 5|rotate column x=18 by 5|rotate column x=15 by 3|rotate column x=10 by 5|rotate row y=5 by 15|rotate row y=4 by 10|rotate row y=3 by 40|rotate row y=2 by 20|rotate row y=1 by 45|rotate row y=0 by 35|rotate column x=48 by 1|rotate column x=47 by 5|rotate column x=46 by 5|rotate column x=45 by 1|rotate column x=43 by 1|rotate column x=40 by 1|rotate column x=38 by 2|rotate column x=37 by 3|rotate column x=36 by 2|rotate column x=32 by 2|rotate column x=31 by 2|rotate column x=28 by 1|rotate column x=23 by 3|rotate column x=22 by 3|rotate column x=21 by 5|rotate column x=20 by 1|rotate column x=18 by 1|rotate column x=17 by 3|rotate column x=13 by 1|rotate column x=10 by 1|rotate column x=8 by 1|rotate column x=7 by 5|rotate column x=6 by 5|rotate column x=5 by 1|rotate column x=3 by 5|rotate column x=2 by 5|rotate column x=1 by 5`;

const createScreen = (height, width) => {
  const screen = [];
  
  for (let r = 0; r < height; r++) {
    const row = [];
    for (let c = 0; c < width; c++) {
      row.push(0);
    }
    screen.push(row);
  }
  
  return screen;
};

const getLightCount = (screen) => {
  let count = 0;
  
  for (let r = 0; r < screen.length; r++) {
    for (let c = 0; c < screen[r].length; c++) {
      if (screen[r][c] === 1) { count++ }
    }
  }
  
  return count;
};

const showScreen = (screen) => {
  for (let r = 0; r < screen.length; r++) {
    console.log(JSON.stringify(screen[r]));
  }
};

const rotate = (screen, direction) => {
  const rotated = [];
  
  if (direction === 'left') {
    for (let c = screen[0].length - 1; c >= 0; c--) {
      const row = [];
      for (let r = 0; r < screen.length; r++) {
        row.push(screen[r][c]);
      }
      rotated.push(row);
    }
  } else {
    for (let c = 0; c < screen[0].length; c++) {
      const row = [];
      for (let r = screen.length - 1; r >= 0; r--) {
        row.push(screen[r][c]);
      }
      rotated.push(row);
    }
  }
  
  return rotated;
};

const placeRect = (screen, directions) => {
  directions = directions.split(' ')[1].split('x');
  const width = +directions[0];
  const height = +directions[1];
  
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      screen[r][c] = 1;
    }
  }
  
  return screen;
};

const moveRight = (screen, rowIndex, shift) => {
  while(shift > 0) {
    screen[rowIndex].unshift(screen[rowIndex].pop());
    shift--;
  }
  return screen;
};

const moveDown = (screen, columnIndex, shift) => {
  screen = rotate(screen, 'left');
  const rotatedRowIndex = screen.length - 1 - columnIndex;
  screen = moveRight(screen, rotatedRowIndex, shift);
  return rotate(screen);
};

const decode = (steps) => {
  let screen = createScreen(6, 50);
  steps.split('|').forEach(step => {
    if (step.split(' ')[1] === 'row') {
      const rowIndex = +step.split(' ')[2].split('=')[1];
      const shift = +step.split(' ')[4];
      screen = moveRight(screen, rowIndex, shift);
    } else if (step.split(' ')[1] === 'column') {
      const columnIndex = +step.split(' ')[2].split('=')[1];
      const shift = +step.split(' ')[4];
      screen = moveDown(screen, columnIndex, shift);
    } else {
      screen = placeRect(screen, step);
    }
  });
  
  const lightCount = getLightCount(screen);
  
  for (let r = 0; r < screen.length; r++) {
    for (let c = 0; c < screen[r].length; c++) {
      (screen[r][c] === 1) ? screen[r][c] = '■' : screen[r][c] = ' ';
    }
  }
  
  showScreen(screen);
  return {lightCount};
};

decode(givenInstructions);
