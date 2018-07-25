/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const reverse = (arr) => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] === 0 ? 1 : 0;
  }

  return arr;
};

const flipAndInvertImage = (m) => {
  for (let r = 0; r < m.length; r++) {
    reverse(m[r]);
  }

  return m;
};
