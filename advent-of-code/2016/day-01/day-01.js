const givenInstructions = 'L3, R2, L5, R1, L1, L2, L2, R1, R5, R1, L1, L2, R2, R4, L4, L3, L3, R5, L1, R3, L5, L2, R4, L5, R4, R2, L2, L1, R1, L3, L3, R2, R1, L4, L1, L1, R4, R5, R1, L2, L1, R188, R4, L3, R54, L4, R4, R74, R2, L4, R185, R1, R3, R5, L2, L3, R1, L1, L3, R3, R2, L3, L4, R1, L3, L5, L2, R2, L1, R2, R1, L4, R5, R4, L5, L5, L4, R5, R4, L5, L3, R4, R1, L5, L4, L3, R5, L5, L2, L4, R4, R4, R2, L1, L3, L2, R5, R4, L5, R1, R2, R5, L2, R4, R5, L2, L3, R3, L4, R3, L2, R1, R4, L5, R1, L5, L3, R4, L2, L2, L5, L5, R5, R2, L5, R1, L3, L2, L2, R3, L3, L4, R2, R3, L1, R2, L5, L3, R4, L4, R4, R3, L3, R1, L3, R5, L5, R1, R5, R3, L1';

const findDistance = (instructions) => {
  instructions = instructions.split(', ');
  let north = 0;
  let east = 0;
  let south = 0;
  let west = 0;
  let currentDirection = 'north';
  let totalDistance = 0;
  
  const currentCoordinate = {x: 0, y: 0};
  const visitedCoordinates = [];
  let visitedTwice = null;
  
  const updateVisitedTwice = () => {
    if (!visitedTwice) {
      if (visitedCoordinates.includes(JSON.stringify(currentCoordinate))) {
        visitedTwice = currentCoordinate;
        console.log('Visited the following coordinate twice:', visitedTwice); // 136
      } else {
        visitedCoordinates.push(JSON.stringify(currentCoordinate));
      }
    }
  };

  const increment = {
    north: () => {
      north++;
      currentCoordinate.x++;
      updateVisitedTwice();
    },
    east: () => {
      east++;
      currentCoordinate.y++;
      updateVisitedTwice();
    },
    south: () => {
      south++;
      currentCoordinate.x--;
      updateVisitedTwice();
    },
    west: () => {
      west++;
      currentCoordinate.y--;
      updateVisitedTwice();
    }
  };
  
  instructions.forEach(instruction => {
    const split = instruction.split('');
    const direction = split.shift();
    let numSteps = +split.join('');
    
    if ((currentDirection === 'north' && direction === 'L') || (currentDirection === 'south' && direction === 'R')) {
      while(numSteps > 0) {
        increment.west();
        numSteps--;
      }
      currentDirection = 'west';
    } else if ((currentDirection === 'north' && direction === 'R') || (currentDirection === 'south' && direction === 'L')) {
      while(numSteps > 0) {
        increment.east();
        numSteps--;
      }
      currentDirection = 'east';
    } else if ((currentDirection === 'east' && direction === 'L') || (currentDirection === 'west' && direction === 'R')) {
      while(numSteps > 0) {
        increment.north();
        numSteps--;
      }
      currentDirection = 'north';
    } else if ((currentDirection === 'east' && direction === 'R') || (currentDirection === 'west' && direction === 'L')) {
      while(numSteps > 0) {
        increment.south();
        numSteps--;
      }
      currentDirection = 'south';
    }
  });
  
  (north >= south) ? totalDistance += north - south : totalDistance += south - north;
  (east >= west) ? totalDistance += east - west : totalDistance += west - east;
  return totalDistance;
};

findDistance(givenInstructions); // 209
