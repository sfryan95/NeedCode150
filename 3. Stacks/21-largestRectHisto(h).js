/**
 * @param {number[]} heights - An array of integers representing the height of bars in the histogram.
 * @return {number} - Returns the area of the largest rectangle that can be formed among the bars.
 */
function largestRectangleArea(heights) {
  // Initialize a stack to keep track of bar indices.
  const stack = [];
  // Initialize a variable to keep track of the maximum area.
  let maxArea = 0;
  // Iterate through all the bars in the heights array.
  for (let i = 0; i <= heights.length; i++) {
    // Use 0 as height for the sentinel value after the last bar.
    const height = i === heights.length ? 0 : heights[i];
    // While the stack is not empty and the current bar height is less than the height of the bar at the stack's top index,
    while (stack.length > 0 && height < heights[stack[stack.length - 1]]) {
      // Pop the top index from the stack.
      const curBarIndex = stack.pop();
      // Calculate the height of the rectangle using the popped index.
      const h = heights[curBarIndex];
      // Calculate the width of the rectangle.
      // If the stack is empty, the width is the current index `i` (meaning the rectangle extends from the start to `i`).
      // Otherwise, the width is the difference between the current index `i` and the index of the new top of the stack minus one.
      const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      // Calculate the area of the rectangle and update the maximum area if necessary.
      maxArea = Math.max(maxArea, h * w);
    }
    // Push the current index onto the stack.
    stack.push(i);
  }
  // Return the maximum area found.
  return maxArea;
}

// Test cases
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // Expected output: 10
console.log(largestRectangleArea([2, 4])); // Expected output: 4
console.log(largestRectangleArea([6, 7, 5, 2, 4, 5, 9, 3])); // Expected output: 16
console.log(largestRectangleArea([0, 9])); // Expected output: 9
console.log(largestRectangleArea([2, 1, 2])); // Expected output: 3
console.log(largestRectangleArea([])); // Expected output: 0
console.log(largestRectangleArea([1])); // Expected output: 1
console.log(largestRectangleArea([4, 2, 0, 3, 2, 5])); // Expected output: 6
