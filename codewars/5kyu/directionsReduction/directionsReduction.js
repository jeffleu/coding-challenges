const isReducable = (arr) => {
  let canBeReduced = false;
  
  arr.forEach((dir, i) => {
    if (!canBeReduced) {
      if (dir === 'NORTH' && arr[i + 1] === 'SOUTH') {
        canBeReduced = true;
      } else if (dir === 'SOUTH' && arr[i + 1] === 'NORTH') {
        canBeReduced = true;
      } else if (dir === 'EAST' && arr[i + 1] === 'WEST') {
        canBeReduced = true;
      } else if (dir === 'WEST' && arr[i + 1] === 'EAST') {
        canBeReduced = true;
      }
    }
  });
  
  return canBeReduced;
};

const reduceDirection = (arr) => {
  let reduced = [];
  let currentIndex = 0;
  
  while(currentIndex < arr.length) {
    const dir = arr[currentIndex];
    const next = arr[currentIndex + 1];
    
    if (dir === 'NORTH' && next === 'SOUTH') {
      currentIndex += 2;
    } else if (dir === 'SOUTH' && next === 'NORTH') {
      currentIndex += 2;
    } else if (dir === 'EAST' && next === 'WEST') {
      currentIndex += 2;
    } else if (dir === 'WEST' && next === 'EAST') {
      currentIndex += 2;
    } else {
      reduced.push(dir);
      currentIndex++; 
    }
  }
  
  return reduced;
};

const dirReduc = (arr) => {
  let canBeReduced = isReducable(arr);
  let reduced = arr.slice();
  
  while(canBeReduced) {
    reduced = reduceDirection(reduced);
    canBeReduced = isReducable(reduced);
  }
  
  return reduced;
};
