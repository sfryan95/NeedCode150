/**
 * @param {number[]} nums - An array of integers.
 * @return {number} - The length of the longest consecutive elements sequence.
 */
function longestConsecutive(nums) {
  // Convert the array to a hash set for fast look-up
  const numSet = new Set(nums);
  
  // Initialize a variable to keep track of the maximum sequence length
  let max = 0

  // Loop through each number in the array
  for (let i = 0; i < nums.length; i++) {
    // For each number, check if it is the start of a sequence (i.e., num - 1 is not in the set)
    if (!numSet.has(nums[i] - 1)) {
      // If it is the start of a sequence:
        // - Initialize a counter and increment the current number to find the length of the sequence
        // - Check consecutive numbers (num + 1, num + 2, etc.) and increment the counter
      let count = 1;
      while (numSet.has(nums[i] + count)) {
        count++
      }
      // Update the maximum sequence length with the current sequence length if it is longer
      max = Math.max(max, count)
    }
  }
  // Return the maximum sequence length found
  return max;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// Expected output: 4 (The longest consecutive elements sequence is [1, 2, 3, 4])

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
// Expected output: 9 (The longest consecutive elements sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8])

console.log(longestConsecutive([]));
// Expected output: 0

