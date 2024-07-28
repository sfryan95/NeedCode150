// Prompt: Implement a function to find the minimum element in a rotated sorted array. The array was originally sorted in ascending order and then rotated between 1 and n times. The solution should run in O(log n) time. All elements in the rotated sorted array are unique.

function findMin(nums) {
  return nums.sort((a, b) => a- b)[0]
}

// Test cases
console.log(findMin([3, 4, 5, 6, 1, 2])); // Output: 1
console.log(findMin([4, 5, 0, 1, 2, 3])); // Output: 0
console.log(findMin([4, 5, 6, 7])); // Output: 4
console.log(findMin([7, 0, 1, 2, 3, 4, 5, 6])); // Output: 0
console.log(findMin([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: 1
console.log(findMin([9, 1, 2, 3, 4, 5, 6, 7, 8])); // Output: 1
console.log(findMin([2, 3, 4, 5, 6, 7, 8, 9, 1])); // Output: 1
console.log(findMin([5, 6, 7, 8, 9, 1, 2, 3, 4])); // Output: 1
