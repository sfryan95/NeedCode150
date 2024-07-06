/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
      let sum = numbers[left] + numbers[right];
      if (sum === target) {
          // Return 1-based indices
          return [left + 1, right + 1];
      } else if (sum > target) {
          right--;
      } else {
          left++;
      }
  }
  // If no solution is found, return an empty array (optional based on problem constraints)
  return [];
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Expected output: [1, 2]
console.log(twoSum([2, 3, 4], 6)); // Expected output: [1, 3]
console.log(twoSum([-1, 0], -1)); // Expected output: [1, 2]
