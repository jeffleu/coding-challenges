// Part 1

/*
37  36  35  34  33  32  31
38  17  16  15  14  13  30
39  18   5   4   3  12  29
40  19   6   1   2  11  28
41  20   7   8   9  10  27
42  21  22  23  24  25  26
43  44  45  46  47  48  49
*/

const getStepsAway = (n) => {
  let layer = 0;
  let oddNum = 1;
  
  while(Math.pow(oddNum, 2) < n) {
    oddNum += 2;
    layer++;
  }
  
  const bottom = {start: Math.pow(oddNum, 2) - oddNum + 1, end: Math.pow(oddNum, 2)};
  const left = {start: bottom.start - oddNum + 2, end: bottom.start - 1};
  const top = {start: left.start - oddNum, end: left.start - 1};
  const right = {start: top.start - oddNum + 2, end: top.start - 1};
  
  let side;
  if (bottom.start <= n && n <= bottom.end) side = bottom;
  if (left.start <= n && n <= left.end) side = left;
  if (top.start <= n && n <= top.end) side = top;
  if (right.start <= n && n <= right.end) side = right;
  
  let mid = (side.start + side.end) / 2;
  for (let distanceFromCenter = 0; distanceFromCenter <= side.end - mid; distanceFromCenter++) {
    if (mid - distanceFromCenter === n || mid + distanceFromCenter === n) return distanceFromCenter + layer;
  }
};

// Part 2

/*
147  142  133  122   59
304    5    4    2   57
330   10    1    1   54 
351   11   23   25   26
362  747  806  880  931
*/

const getSumOfNeighbors = (x, y, values) => {
  let currentValue = 0;
  
  if (values.hasOwnProperty(`${x - 1} ${y + 1}`)) currentValue += values[`${x - 1} ${y + 1}`];
  if (values.hasOwnProperty(`${x} ${y + 1}`)) currentValue += values[`${x} ${y + 1}`];
  if (values.hasOwnProperty(`${x + 1} ${y + 1}`)) currentValue += values[`${x + 1} ${y + 1}`];
  if (values.hasOwnProperty(`${x + 1} ${y}`)) currentValue += values[`${x + 1} ${y}`];
  if (values.hasOwnProperty(`${x + 1} ${y - 1}`)) currentValue += values[`${x + 1} ${y - 1}`];
  if (values.hasOwnProperty(`${x} ${y - 1}`)) currentValue += values[`${x} ${y - 1}`];
  if (values.hasOwnProperty(`${x - 1} ${y - 1}`)) currentValue += values[`${x - 1} ${y - 1}`];
  if (values.hasOwnProperty(`${x - 1} ${y}`)) currentValue += values[`${x - 1} ${y}`];
  
  values[`${x} ${y}`] = currentValue;
  return currentValue;
};

const getSpiralValues = (n) => {
  const values = {'0 0': 1, '1 0': 1};
  let oddNum = 3;
  let x = 1;
  let y = 0;
  let foundResult = false;
  
  while(!foundResult) {
    let up = oddNum - 2;
    for (let i = 0; i < up; i++) {
      y++;
      const currentValue = getSumOfNeighbors(x, y, values);
      if (currentValue > n) {
        foundResult = true;
        return currentValue;
      }
    }
    
    let left = oddNum - 1;
    for (let i = 0; i < left; i++) {
      x--;
      const currentValue = getSumOfNeighbors(x, y, values);
      if (currentValue > n) {
        foundResult = true;
        return currentValue;
      }
    }
    
    let down = oddNum - 1;
    for (let i = 0; i < down; i++) {
      y--;
      const currentValue = getSumOfNeighbors(x, y, values);
      if (currentValue > n) {
        foundResult = true;
        return currentValue;
      }
    }
    
    let right = oddNum;
    for (let i = 0; i < right; i++) {
      x++;
      const currentValue = getSumOfNeighbors(x, y, values);
      if (currentValue > n) {
        foundResult = true;
        return currentValue;
      }
    }
    
    oddNum += 2;
  }
};

const answer1 = getStepsAway(347991);
const answer2 = getSpiralValues(347991);
console.log(`expected ${answer1} to equal 480:`, answer1 === 480);
console.log(`expected ${answer2} to equal 349975:`, answer2 === 349975);
