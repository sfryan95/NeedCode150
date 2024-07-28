// Prompt: Implement a binary search function to find the index of a target value in a sorted array of distinct integers. If the target is not found, return -1. The function must run in O(log n) time.

function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((end + start) / 2);
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      end = mid - 1;
    }
    else {
      start = mid + 1;
    }
  }
  return -1;
}

// Test cases
console.log(binarySearch([-1, 0, 2, 4, 6, 8], 4)); // Output: 3
console.log(binarySearch([-1, 0, 2, 4, 6, 8], 3)); // Output: -1
console.log(binarySearch([1, 3, 5, 7, 9], 5)); // Output: 2
console.log(binarySearch([1, 3, 5, 7, 9], 10)); // Output: -1
console.log(binarySearch([], 1)); // Output: -1
console.log(binarySearch([1], 1)); // Output: 0
console.log(binarySearch([1, 2], 2)); // Output: 1
