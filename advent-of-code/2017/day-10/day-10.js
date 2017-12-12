const createList = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) result[i] = i;
  return result;
};

const reverseSection = (arr, currentIndex, sectionLength) => {
  const distanceFromEnd = arr.length - currentIndex;
  let start = currentIndex;
  let end = (sectionLength > distanceFromEnd ? sectionLength - distanceFromEnd : currentIndex + sectionLength) - 1;

  let movesLeft = Math.floor(sectionLength / 2);
  while(movesLeft) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start = start < arr.length - 1 ? start + 1 : 0;
    end = end > 0 ? end - 1 : arr.length - 1;
    movesLeft--;
  }

  return arr;
};

const knotHash = (sequence, listSize = 256) => {
  sequence = sequence.split(',').map(Number);
  const list = createList(listSize);
  let listIndex = 0;
  let skipSize = 0;

  for (let i = 0; i < sequence.length; i++) {
    reverseSection(list, listIndex, sequence[i]);
    const distanceFromEnd = list.length - listIndex;
    const jumpAhead = sequence[i] + skipSize;
    listIndex = (jumpAhead > distanceFromEnd ? jumpAhead - distanceFromEnd : listIndex + jumpAhead);
    skipSize++;
  }

  return list[0] * list[1];
};

const input = '197,97,204,108,1,29,5,71,0,50,2,255,248,78,254,63';

const answer1 = knotHash(input);
console.log(`expected ${answer1} to equal 40132:`, answer1 === 40132);
