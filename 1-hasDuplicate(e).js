function hasDuplicate(nums) {
  return nums.length !== Array.from(new Set(nums)).length
}

console.log(hasDuplicate([1,2,3,4,4,5,6]))
console.log(hasDuplicate([1,2,3,4]))