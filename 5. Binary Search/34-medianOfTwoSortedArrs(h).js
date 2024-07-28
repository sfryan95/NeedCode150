// Prompt: Implement a function to find the median value among all elements of two sorted arrays, nums1 and nums2. The solution must run in O(log(m + n)) time, where m and n are the lengths of nums1 and nums2 respectively.

function findMedianSortedArrays(nums1, nums2) {
  // Pseudocode:
  // Step 1: Ensure nums1 is the smaller array to minimize binary search space.
  // Step 2: Initialize variables for binary search on the smaller array.
  // Step 3: Perform binary search to partition both arrays such that:
  //         - left partition contains half of the total elements (or one more if odd).
  //         - right partition contains the other half.
  // Step 4: Check if the partitions are valid by ensuring all elements in the left partition
  //         are less than or equal to those in the right partition.
  // Step 5: Calculate the median based on the combined length of nums1 and nums2:
  //         - If the combined length is odd, return the maximum element in the left partition.
  //         - If the combined length is even, return the average of the maximum element in the left
  //           partition and the minimum element in the right partition.

  // Your implementation here
}

// Example test cases
console.log(findMedianSortedArrays([1, 2], [3])); // Output: 2.0
console.log(findMedianSortedArrays([1, 3], [2, 4])); // Output: 2.5
