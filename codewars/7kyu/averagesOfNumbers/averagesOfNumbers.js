function averages(numbers) {
  if (numbers === null || numbers.length === 0 || numbers.length === 1) { return [] }
  
  let avg = [];
  
  for (let i = 0; i < numbers.length; i++) {
    // If not the last number in array, get average of current and next
    if (i !== numbers.length - 1) {
      avg.push((numbers[i] + numbers[i + 1]) / 2);
    }
  }
  
  return avg;
}