/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
  let minPrice = Number.MAX_VALUE;
  let result = 0;
  
  for (let i = 0; i < prices.length; i++) {
  	if (prices[i] < minPrice) {
  		minPrice = prices[i];
  	} else if (prices[i] - minPrice > result) {
  		result = prices[i] - minPrice;
  	}
  }
  
  return result;
};
