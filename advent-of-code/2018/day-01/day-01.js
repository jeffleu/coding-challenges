const { data } = require('./inputData');

const getFrequency = (frequencyChanges, part) => {
  const input = frequencyChanges.split('\n').map(Number);
  
  if (part === 1) return input.reduce((result, num) => result + num, 0);

  let result;
  let accumulator = 0;
  const visited = new Set([0]);
  let index = 0;

  while(!result) {
    accumulator += input[index];
    if (visited.has(accumulator)) {
      result = accumulator;
    } else {
      visited.add(accumulator);
      index = index < input.length - 1 ? index + 1 : 0;
    }
  }

  return result;
};

console.log(`Part 1: ${getFrequency(data, 1)}`); // 540
console.log(`Part 2: ${getFrequency(data, 2)}`); // 73056
