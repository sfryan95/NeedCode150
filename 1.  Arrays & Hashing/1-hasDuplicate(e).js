// function hasDuplicate(nums) {
//   return nums.length !== Array.from(new Set(nums)).length
// }

function hasDuplicate(nums) {
  const numsSet = new Set();
  for (const num of nums) {
    if (numsSet.has(num)) return true;

    numsSet.add(num);
  }
  return false;
}

console.log(hasDuplicate([1, 2, 3, 4, 4, 5, 6]));
console.log(hasDuplicate([1, 2, 3, 4]));
