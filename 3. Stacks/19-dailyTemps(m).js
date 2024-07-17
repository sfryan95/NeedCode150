/**
 * @param {number[]} temperatures - An array of integers representing the daily temperatures.
 * @return {number[]} - Returns an array where each element indicates the number of days until a warmer temperature.
 */
function dailyTemperatures(temperatures) {
  // Initialize an array to store the result with the same length as temperatures, filled with 0s.
  const result = new Array(temperatures.length).fill(0);

  // Initialize an array to act as a stack to keep track of indices of the temperatures array.
  const tempStack = [];

  // Iterate through the temperatures array.
  for (let i = 0; i < temperatures.length; i++) {
    // While there are indices in the stack and the current temperature is greater than the temperature at the index stored at the top of the stack.
    while (tempStack.length > 0 && temperatures[i] > temperatures[tempStack[tempStack.length - 1]]) {
      // Pop the index from the stack.
      const prevIndex = tempStack.pop();

      // Calculate the difference in days and store it in the result array.
      result[prevIndex] = i - prevIndex;
    }
    // Push the current index onto the stack.
    tempStack.push(i)
  }
  // Return the result array.
  return result;
}

// Example usage and test cases:
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // Expected output: [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures([30, 40, 50, 60])); // Expected output: [1, 1, 1, 0]
console.log(dailyTemperatures([30, 60, 90])); // Expected output: [1, 1, 0]
console.log(dailyTemperatures([90, 80, 70, 60, 50])); // Expected output: [0, 0, 0, 0, 0]
console.log(dailyTemperatures([50, 60, 50, 60, 50])); // Expected output: [1, 0, 1, 0, 0]
console.log(dailyTemperatures([])); // Expected output: []
