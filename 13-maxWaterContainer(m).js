/**
 * @param {number[]} heights - An array of integers representing the heights of the bars.
 * @return {number} - The maximum amount of water a container can store.
 */
function maxArea(heights) {
  // Initialize two pointers, one at the beginning and one at the end of the array
  let left = 0;
  let right = heights.length - 1;

  // Variable to track the maximum area
  let maxArea = 0;

  // Loop until the two pointers meet
  while (left < right) {
    // Calculate the area using the current positions of left and right
    let curArea = (right - left) * (Math.min(heights[left], heights[right]));

    // Update the maximum area if the current area is larger
    maxArea = Math.max(maxArea, curArea);

    // Move the pointer that points to the shorter bar inward
    // If the left bar is shorter, move the left pointer to the right
    if (heights[left] <= heights[right]) left++;
    // Otherwise, move the right pointer to the left
    else right--;
  }
  // Return the maximum area found
  return maxArea;
}

// Test case 1: General case with a variety of heights
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Expected output: 49

// Test case 2: All heights are the same
console.log(maxArea([1, 1, 1, 1, 1])); // Expected output: 4 (between the first and last element)

// Test case 3: Decreasing heights
console.log(maxArea([5, 4, 3, 2, 1])); // Expected output: 6 (between the first and second element)

// Test case 4: Increasing heights
console.log(maxArea([1, 2, 3, 4, 5])); // Expected output: 6 (between the first and last element)

// Test case 5: Single element (edge case)
console.log(maxArea([1])); // Expected output: 0 (not enough bars to form a container)

// Test case 6: Two elements (edge case)
console.log(maxArea([1, 2])); // Expected output: 1 (only one possible container)

// Test case 7: Heights with large numbers
console.log(maxArea([10000, 1, 10000, 1, 10000])); // Expected output: 40000 (between the first and fifth elements)

// Test case 8: Empty array (edge case)
console.log(maxArea([])); // Expected output: 0 (no bars to form a container)
