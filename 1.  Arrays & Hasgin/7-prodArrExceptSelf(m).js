/**
 * @param {number[]} nums - An array of integers.
 * @return {number[]} - An array where each element is the product of all elements except itself.
 */
function productExceptSelf(nums) {
  const result = []

  const product = nums.reduce((acc, cur) => cur !== 0 ? acc * cur : acc, 1)

  return nums.map(x => x !== 0 ? product / x : 0) 

}

console.log(productExceptSelf([1, 2, 3, 4]));
// Expected output: [24, 12, 8, 6]

console.log(productExceptSelf([0, 0]));
// Expected output: [0, 0]

console.log(productExceptSelf([1, 0]));
// Expected output: [0, 1]