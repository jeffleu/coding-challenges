/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let currentMax = 0;
  let maxSoFar = 0;
  
  for (let i = 1; i < prices.length; i++) {
    currentMax = Math.max(0, currentMax += prices[i] - prices[i - 1]);
    maxSoFar = Math.max(maxSoFar, currentMax);
  }
  
  return maxSoFar;
};
