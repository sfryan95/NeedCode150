// Prompt: Implement a function to find the duplicate integer in an array of integers nums containing n + 1 integers. Each integer in nums is in the range [1, n] inclusive. Every integer appears exactly once, except for one integer which appears two or more times. Return the integer that appears more than once. Can you solve the problem without modifying the array nums and using O(1) extra space?

function findDuplicate(nums) {
  // Your implementation here
}

// Test cases

// Example 1
console.log(findDuplicate([1, 2, 3, 2, 2])); // Output: 2

// Example 2
console.log(findDuplicate([1, 2, 3, 4, 4])); // Output: 4

// Additional test cases
console.log(findDuplicate([1, 3, 4, 2, 2])); // Output: 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // Output: 3
console.log(findDuplicate([1, 1])); // Output: 1
console.log(findDuplicate([1, 1, 2])); // Output: 1
console.log(findDuplicate([2, 2, 2, 2, 2])); // Output: 2
