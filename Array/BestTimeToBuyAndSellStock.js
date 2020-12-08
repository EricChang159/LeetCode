// Best Time to Buy and Sell Stock
let prices = [2,4,13,3,1,7]
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buy = prices[0];
  let sell =  0;
  
  for(let i = 1; i < prices.length; i++){
      buy = Math.min(buy, prices[i])
      sell = Math.max(sell, prices[i] - buy)
  }

  return sell
};
