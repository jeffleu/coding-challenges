/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements = (arr, k, x) => {
  const result = [];
  if (arr.includes(x)) { // If x already exists in arr, add to result and decrement k
    result.push(x);
    k--;
  } else { // If x doesn't exist in arr, insert using binary insertion sort
    let start = 0;
    let end = arr.length - 1;
    while(start < end) {
      const mid = Math.floor((start + end) / 2);
      if (x > arr[mid]) start = mid + 1;
      else end = mid;
    }
    arr.splice(start, 0, x);
  }

  let left = arr.indexOf(x) - 1; // Set left pointer one index to the left of x
  let right = arr.indexOf(x) + 1; // Set right pointer one index to the right of x

  while(k) { // While there are numbers to add to result
    if (right >= arr.length) { // If right pointer is out of range
      result.unshift(arr[left]); // Add number at left pointer index to front of result array
      left--; // Move left pointer down
    } else if (left < 0) { // If left pointer is out of range
      result.push(arr[right]); // Add number at right pointer index to back of result array
      right++; // Move right pointer up
    } else if (x - arr[left] <= arr[right] - x) { // If left difference is less than right difference
      result.unshift(arr[left]); // Add number at left pointer index to front of result array
      left--; // Move left pointer down
    } else if (arr[right] - x <= x - arr[left]) { // If right difference is less than left difference
      result.push(arr[right]); // Add number at right pointer index to back of result array
      right++; // Move right pointer up
    }
    k--;
  }
  return result;
};
