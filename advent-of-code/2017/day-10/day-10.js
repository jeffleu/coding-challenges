// Work in progress
const reverseSection = (arr, currentIndex, sectionLength) => {
  let start = currentIndex;
  let end = currentIndex;
  let movesLeft = sectionLength - 1;

  while(movesLeft) {
    end = arr[end + 1] !== undefined ? end + 1 : 0;
    movesLeft--;
  }

  movesLeft = Math.floor(sectionLength / 2);

  while(movesLeft) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start = start === arr.length - 1 ? 0 : start + 1;
    end = end === 0 ? arr.length - 1 : end - 1;
    movesLeft--;
  }

  return arr;
};

const createList = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) result[i] = i;
  return result;
};

const knotHash = (listSize, sequence) => {
  sequence = sequence.split(',').map(Number);
  const list = createList(listSize);
  let listIndex = 0;
  let skip = 0;

  for (let i = 0; i < sequence.length; i++) {
    reverseSection(list, listIndex, sequence[i]);

    // let movesLeft = sequence[i] + skip;
    // while(movesLeft) {
    //   listIndex = listIndex === list.length - 1 ? 0 : listIndex + 1;
    //   movesLeft--;
    // }

    const jumpAhead = sequence[i] + skip;
    const distanceFromEnd = list.length - 1 - listIndex;

    if (jumpAhead <= distanceFromEnd) {
      listIndex += jumpAhead;
    } else {
      if (jumpAhead < list.length) {
        listIndex += list.length % jumpAhead;
      } else {
        listIndex += jumpAhead % list.length;
      }
    }

    skip++;
  }

  console.log('list', list);
  return list[0] * list[1];
};

const example = `3,4,1,5`;
const exampleAnswer = knotHash(5, example);
console.log(exampleAnswer);

// const input = `197,97,204,108,1,29,5,71,0,50,2,255,248,78,254,63`;
// const answer = knotHash(255, input);
// console.log(answer);


/*
distFromEnd  = arr.length - 1 - listIndex => 3?
if current seq is <= distFromEnd
  listIndex += seq
else
  if seq < arr.length
    listIndex += arr.length % seq
  else
    listIndex += seq % arr.length

   x
[1,2,3,4,5]
*/

console.log(5 % 4)