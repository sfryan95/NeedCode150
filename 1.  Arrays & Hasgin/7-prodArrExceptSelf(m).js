/**
 * @param {number[]} nums - An array of integers.
 * @return {number[]} - An array where each element is the product of all elements except itself.
 */
// function productExceptSelf(nums) {
//   const result = []

//   const product = nums.reduce((acc, cur) => cur !== 0 ? acc * cur : acc, 1)

//   return nums.map(x => x !== 0 ? product / x : 0) 

// }
// with O(n) time complexity and no division
function productExceptSelf(nums) {
  const length = nums.length;
  
  // Initialize the result array that will hold our final products
  const result = new Array(length);
  
  // Initialize the left array that will hold the products of all elements to the left of each index
  const left = new Array(length);
  
  // Initialize the right array that will hold the products of all elements to the right of each index
  const right = new Array(length);
  
  // Compute the left products
  left[0] = 1; // There are no elements to the left of the first element, so initialize to 1
  for (let i = 1; i < length; i++) {
    // left[i] contains the product of all elements to the left of i
    left[i] = left[i - 1] * nums[i - 1];
  }
  
  // Compute the right products
  right[length - 1] = 1; // There are no elements to the right of the last element, so initialize to 1
  for (let i = length - 2; i >= 0; i--) {
    // right[i] contains the product of all elements to the right of i
    right[i] = right[i + 1] * nums[i + 1];
  }
  
  // Compute the result by multiplying left and right products for each index
  for (let i = 0; i < length; i++) {
    // result[i] is the product of all elements to the left and all elements to the right of i
    result[i] = left[i] * right[i];
  }
  
  return result; // Return the final result array
}


console.log(productExceptSelf([1, 2, 3, 4]));
// Expected output: [24, 12, 8, 6]

console.log(productExceptSelf([0, 0]));
// Expected output: [0, 0]

console.log(productExceptSelf([1, 0]));
// Expected output: [0, 1]