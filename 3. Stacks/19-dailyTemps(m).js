/**
 * @param {number[]} temperatures - An array of integers representing the daily temperatures.
 * @return {number[]} - Returns an array where each element indicates the number of days until a warmer temperature.
 */
function dailyTemperatures(temperatures) {
  // Implementation here
}

// Example usage and test cases:
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // Expected output: [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures([30, 40, 50, 60])); // Expected output: [1, 1, 1, 0]
console.log(dailyTemperatures([30, 60, 90])); // Expected output: [1, 1, 0]
console.log(dailyTemperatures([90, 80, 70, 60, 50])); // Expected output: [0, 0, 0, 0, 0]
console.log(dailyTemperatures([50, 60, 50, 60, 50])); // Expected output: [1, 0, 1, 0, 0]
console.log(dailyTemperatures([])); // Expected output: []
