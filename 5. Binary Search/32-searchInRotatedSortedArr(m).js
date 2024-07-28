// Prompt: Implement a function to find the index of a target value in a rotated sorted array. The array was originally sorted in ascending order and then rotated between 1 and n times. The solution should run in O(log n) time. All elements in the rotated sorted array are unique.

function search(nums, target) {
  
}

// Test cases
console.log(search([3, 4, 5, 6, 1, 2], 1)); // Output: 4
console.log(search([3, 5, 6, 0, 1, 2], 4)); // Output: -1
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // Output: -1
console.log(search([1], 0)); // Output: -1
console.log(search([1], 1)); // Output: 0
console.log(search([5, 1, 3], 3)); // Output: 2
console.log(search([5, 1, 3], 5)); // Output: 0
