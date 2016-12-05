/********************************************************************************
  --- Day 1: No Time for a Taxicab ---

  Santa's sleigh uses a very high-precision clock to guide its movements, and the 
  clock's oscillator is regulated by stars. Unfortunately, the stars have been
  stolen... by the Easter Bunny. To save Christmas, Santa needs you to retrieve 
  all fifty stars by December 25th.

  Collect stars by solving puzzles. Two puzzles will be made available on each 
  day in the advent calendar; the second puzzle is unlocked when you complete the 
  first. Each puzzle grants one star. Good luck!

  You're airdropped near Easter Bunny Headquarters in a city somewhere. "Near", 
  unfortunately, is as close as you can get - the instructions on the Easter 
  Bunny Recruiting Document the Elves intercepted start here, and nobody had time
  to work them out further.

  The Document indicates that you should start at the given coordinates (where
  you just landed) and face North. Then, follow the provided sequence: either
  turn left (L) or right (R) 90 degrees, then walk forward the given number of
  blocks, ending at a new intersection.

  There's no time to follow such ridiculous instructions on foot, though, so you
  take a moment and work out the destination. Given that you can only walk on the
  street grid of the city, how far is the shortest path to the destination?

  For example:

  - Following R2, L3 leaves you 2 blocks East and 3 blocks North, or 5 blocks away.
  - R2, R2, R2 leaves you 2 blocks due South of your starting position, which is 2
    blocks away.
  - R5, L5, R5, R3 leaves you 12 blocks away.
  
  How many blocks away is Easter Bunny HQ?

  ANSWER: 209

  --- Part Two ---

  Then, you notice the instructions continue on the back of the Recruiting
  Document. Easter Bunny HQ is actually at the first location you visit twice.

  For example, if your instructions are R8, R4, R4, R8, the first location you
  visit twice is 4 blocks away, due East.

  How many blocks away is the first location you visit twice?

  ANSWER: 136
********************************************************************************/

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
