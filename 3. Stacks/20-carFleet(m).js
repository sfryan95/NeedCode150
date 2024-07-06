/**
 * @param {number} target - The destination position in miles.
 * @param {number[]} position - An array of integers representing the positions of the cars.
 * @param {number[]} speed - An array of integers representing the speeds of the cars.
 * @return {number} - Returns the number of different car fleets that will arrive at the destination.
 */
function carFleet(target, position, speed) {
  // Implementation here
}

// Example usage and test cases:
console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])); // Expected output: 3
console.log(carFleet(10, [3], [3])); // Expected output: 1
console.log(carFleet(100, [0, 2, 4], [4, 2, 1])); // Expected output: 1
console.log(carFleet(10, [6, 8], [3, 2])); // Expected output: 2
console.log(carFleet(12, [10, 8, 0, 5, 3, 11], [2, 4, 1, 1, 3, 2])); // Expected output: 4
console.log(carFleet(15, [10, 3, 7, 5], [2, 4, 1, 2])); // Expected output: 2
console.log(carFleet(20, [5, 9, 3], [1, 2, 3])); // Expected output: 3
