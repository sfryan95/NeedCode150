// /**
//  * @param {number[]} prices - An array of integers representing the price of NeetCoin on the ith day.
//  * @return {number} - Returns the maximum profit you can achieve, or 0 if no transaction is made.
//  */
// function maxProfit(prices) {
//   let maxProfit = 0;
//   let minPrice = Infinity;

//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < minPrice) {
//       minPrice = prices[i];
//     } else {
//       const profit = prices[i] - minPrice
//       if (profit > maxProfit) {
//         maxProfit = profit;
//       }
//     }
//   }
//   return maxProfit;
// }

/**
 * @param {number[]} prices - An array of integers representing the price of NeetCoin on the ith day.
 * @return {number} - Returns the maximum profit you can achieve, or 0 if no transaction is made.
 */
function maxProfit(prices) {
  let left = 0; // Buy day
  let right = 1; // Sell day
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right++;
  }

  return maxProfit;
}

// Test Cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Expected output: 5
console.log(maxProfit([7, 6, 4, 3, 1])); // Expected output: 0
console.log(maxProfit([1, 2, 3, 4, 5])); // Expected output: 4
console.log(maxProfit([3, 3, 3, 3, 3])); // Expected output: 0
console.log(maxProfit([5, 4, 3, 2, 1, 6, 7, 8])); // Expected output: 7
console.log(maxProfit([3, 8, 2, 5, 7, 1, 9])); // Expected output: 8
console.log(maxProfit([10, 22, 5, 75, 65, 80])); // Expected output: 75
console.log(maxProfit([1, 100])); // Expected output: 99
console.log(maxProfit([2, 4, 1])); // Expected output: 2
console.log(maxProfit([7, 1, 5, 3, 6, 4, 8, 2])); // Expected output: 7

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let drunk = numBottles;
  let empties = numBottles;
  while (empties >= numExchange) {
    const exchange = Math.floor(empties / numExchange);
    drunk += exchange;
    empties = empties % numExchange + exchange
  }
  return drunk;
};

// console.log(numWaterBottles(10, 6));
console.log(numWaterBottles(15, 4));
