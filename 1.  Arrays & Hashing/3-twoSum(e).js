/**
 * @param {number[]} nums - An array of integers.
 * @param {number} target - The target sum.
 * @return {number[]} - Indices of the two numbers that add up to the target.
 */
function twoSum(nums, target) {
  cache = new Map()
  for (let i = 0; i < nums.length; i++) {
    d = target - nums[i]
    if (cache.get(d) !== undefined) {
      return [cache.get(d), i]
    } else {
      cache.set(nums[i], i)
    }
  }
}

const testArray = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(testArray, target))
// Expected output: [0, 1]