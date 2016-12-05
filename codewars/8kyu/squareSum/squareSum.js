const squareSum = (numbers) => {
  return numbers.reduce((total, num) => total + Math.pow(num, 2), 0);
}