/**
 * @param {number[]} nums - An array of integers.
 * @param {number} k - The number of top frequent elements to return.
 * @return {number[]} - An array of the k most frequent elements.
 */
function topKFrequent(nums, k) {
  freqCount = {};

  for (const num of nums) {
    freqCount[num] = (freqCount[num] || 0) + 1;
  }

  // Create an array of buckets where the index is the frequency
  const buckets = Array(nums.length + 1).fill().map(() => []);

  for (const num in freqCount) {
    buckets[freqCount[num]].push(Number(num))
  }
  
  // Collect the top K frequent elements
  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets[i].length > 0) {
      result.push(...buckets[i])
    }
    if (result.length === k) return result;
  }
  
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
// Expected output: [1, 2]

console.log(topKFrequent([1], 1));
// Expected output: [1]

console.log(topKFrequent([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 3));
// Expected output: [4, 3, 2]
