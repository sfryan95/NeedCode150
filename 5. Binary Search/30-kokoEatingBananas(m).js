// Prompt: Implement a function to find the minimum integer k such that you can eat all the bananas within h hours. You are given an integer array piles where piles[i] is the number of bananas in the ith pile, and an integer h representing the number of hours you have to eat all the bananas. Each hour, you may choose a pile of bananas and eat k bananas from that pile. If the pile has less than k bananas, you may finish eating the pile but cannot eat from another pile in the same hour.

function minEatingSpeed(piles, h) {
  if (h === piles.length) return Math.max(...piles);
  let count = 1;
  let timeToFinish = piles.map((num) => Math.ceil(num / count)).reduce((acc, cur) => acc + cur, 0);
  while (timeToFinish > h) {
    count++
    console.log(count);
    timeToFinish = piles.map((num) => Math.ceil(num / count)).reduce((acc, cur) => acc + cur, 0);
  }
  return count;
}

// Test cases
// console.log(minEatingSpeed([1, 4, 3, 2], 9)); // Output: 2
// console.log(minEatingSpeed([25, 10, 23, 4], 4)); // Output: 25
// console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // Output: 30
// console.log(minEatingSpeed([3, 6, 7, 11], 8)); // Output: 4
// console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // Output: 23
console.log(minEatingSpeed([5, 7, 10, 15], 7)); // Output: 10
// console.log(minEatingSpeed([1, 1, 1, 1], 4)); // Output: 1
// console.log(minEatingSpeed([100], 1)); // Output: 100
