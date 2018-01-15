/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const binarySearch = (arr, target, min = 0, max = arr.length - 1) => {
  while(min <= max) {
    const mid = Math.floor((min + max) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (arr[mid] < target) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  
  return -1;
};

const search = (arr, target) => {
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return binarySearch(arr, target);
  
  let firstIndex;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      firstIndex = i;
      break;
    }
  }
  
  let min;
  let max;
  
  if (target === arr[0]) {
    return 0;
  } else if (target > arr[0]) {
    min = 0;
    max = firstIndex - 1;
  } else {
    min = firstIndex;
    max = arr.length - 1;
  }
  
  return binarySearch(arr, target, min, max);
};
