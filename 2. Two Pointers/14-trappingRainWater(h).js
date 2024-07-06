/**
 * @param {number[]} heights - An array of non-negative integers representing the elevation map.
 * Each value heights[i] represents the height of a bar with a width of 1.
 * @return {number} - The maximum area of water that can be trapped between the bars.
 */
function trap(heights) {
  // Edge case: If the array is empty, return 0
  if (heights.length === 0) return 0;

  // Initialize two pointers, left and right, at the beginning and end of the array
  let left = 0;
  let right = heights.length - 1;

  // Initialize variables to track the maximum heights seen from the left and right
  let leftMax = 0;
  let rightMax = 0;

  // Initialize a variable to store the total amount of trapped water
  let totalWater = 0;

  // Loop until the left pointer is less than or equal to the right pointer
  while (left < right) {
    // If the height at the left pointer is less than or equal to the height at the right pointer
    if (heights[left] <= heights[right]) {
      // If the current height at the left pointer is greater than or equal to the max height from the left
      // Update the max height from the left
      if (heights[left] >= leftMax) leftMax = heights[left];
      // Else, add the difference between the max height from the left and the current height at the left pointer to the total trapped water
      else {
        totalWater += leftMax - heights[left];
      }
      left++;
      // Else (the height at the right pointer is less than the height at the left pointer)
    } else {
      // If the current height at the right pointer is greater than or equal to the max height from the right
      // Update the max height from the right
      if (heights[right] >= rightMax) rightMax = heights[right];
      // Else, add the difference between the max height from the right and the current height at the right pointer to the total trapped water
      else {
        totalWater += rightMax - heights[right];
      }
      // Move the right pointer to the left
      right--;
    }
  }
  // Return the total amount of trapped water
  return totalWater;
}

// Test case 1: General case with multiple trapping areas
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Expected output: 6

// Test case 2: No trapping water
console.log(trap([3, 3, 3, 3])); // Expected output: 0

// Test case 3: Decreasing heights (no trapped water)
console.log(trap([5, 4, 3, 2, 1])); // Expected output: 0

// Test case 4: Increasing heights (no trapped water)
console.log(trap([1, 2, 3, 4, 5])); // Expected output: 0

// Test case 5: Valley shape trapping water
console.log(trap([3, 0, 2, 0, 4])); // Expected output: 7

// Test case 6: Single bar (edge case)
console.log(trap([1])); // Expected output: 0

// Test case 7: Two bars (edge case)
console.log(trap([1, 2])); // Expected output: 0

// Test case 8: Empty array (edge case)
console.log(trap([])); // Expected output: 0

// Test case 9: Complex case with multiple valleys
console.log(trap([4, 2, 0, 3, 2, 5])); // Expected output: 9

// Test case 10: Another complex case
console.log(trap([4, 2, 0, 3, 2, 4, 3, 4])); // Expected output: 10
