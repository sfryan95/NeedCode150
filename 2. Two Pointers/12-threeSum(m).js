/**
 * @param {number[]} nums - An array of integers
 * @return {number[][]} - A list of unique triplets [nums[i], nums[j], nums[k]] such that they add up to zero
 */
function threeSum(nums) {
  // If the array has fewer than three elements, return an empty array since no triplet can be formed
  if (nums.length < 3) {
      return [];
  }

  // Sort the array to facilitate the two-pointer technique and duplicate avoidance
  nums.sort((a, b) => a - b);
  const result = [];

  // Iterate through the array, fixing one element at a time
  for (let i = 0; i < nums.length - 2; i++) {
      // Skip duplicates for the fixed element
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      // Initialize two pointers: left starts just after the fixed element, right starts at the end of the array
      let left = i + 1;
      let right = nums.length - 1;

      // Use the two-pointer technique to find pairs that sum to the negative of the fixed element
      while (left < right) {
          // Calculate the sum of the current triplet
          let sum = nums[i] + nums[left] + nums[right];

          // Check if the sum is zero
          if (sum === 0) {
              // If the sum is zero, add the triplet to the result
              result.push([nums[i], nums[left], nums[right]]);

              // Skip duplicates for the left pointer
              while (left < right && nums[left] === nums[left + 1]) left++;
              // Skip duplicates for the right pointer
              while (left < right && nums[right] === nums[right - 1]) right--;

              // Move both pointers inward
              left++;
              right--;
          } else if (sum < 0) {
              // If the sum is less than zero, move the left pointer to the right to increase the sum
              left++;
          } else {
              // If the sum is greater than zero, move the right pointer to the left to decrease the sum
              right--;
          }
      }
  }

  // Return the list of unique triplets
  return result;
}

// Example usage:
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Expected output: [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([])); // Expected output: []
console.log(threeSum([0])); // Expected output: []
console.log(threeSum([0, 1])); // Expected output: []
console.log(threeSum([0, 0, 0])); // Expected output: [[0, 0, 0]]
