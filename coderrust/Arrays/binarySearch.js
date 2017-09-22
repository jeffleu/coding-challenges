const binarySearch = (nums, target) => {
  let min = 0;
  let max = nums.length - 1;
  
  while(min <= max) {
    const mid = min + Math.floor((max - min) / 2);
    if (nums[mid] === target) return mid;
    nums[mid] < target ? min = mid + 1 : max = mid - 1;
  }
  
  return -1;
};
