const getLargestNumAndIndex = (arr) => {
  return arr.reduce((output, n, i) => {
    if (n > output.num) {
      output.num = n;
      output.index = i;
    }
    return output;
  }, {num: -Infinity, index: -1});
};

const getRedistributionCycle = (banks) => {
  banks = banks.split(' ').map(Number);
  let step = 0;
  const visited = {};
  let foundResult = false;
  
  while(!foundResult) {
    const str = banks.join(' ');
    if (!visited.hasOwnProperty(str)) {
      visited[str] = step;
    } else {
      return {part1: step, part2: step - visited[str]};
    }
    
    step++;
    const largest = getLargestNumAndIndex(banks);
    banks[largest.index] = 0;
    
    while(largest.num) {
      largest.num--;
      largest.index++;
      if (largest.index === banks.length) largest.index = 0;
      banks[largest.index]++;
    }
  }
};

const input = `0 5 10 0 11 14 13 4 11 8 8 7 1 4 12 11`;
const answer = getRedistributionCycle(input);
console.log(`expected ${answer.part1} to equal 7864:`, answer.part1 === 7864);
console.log(`expected ${answer.part2} to equal 1695:`, answer.part2 === 1695);
