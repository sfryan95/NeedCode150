/**
 * @param {number} target - The destination position in miles.
 * @param {number[]} position - An array of integers representing the positions of the cars.
 * @param {number[]} speed - An array of integers representing the speeds of the cars.
 * @return {number} - Returns the number of different car fleets that will arrive at the destination.
 */
function carFleet(target, position, speed) {
  // Initialize an array to store pairs of (position, time to reach target).
  const posSpeed = position.map((pos, i) => [pos, (target - pos) / speed[i]]);

  // Sort the array based on the position of the cars in descending order.
  const sortedArr = posSpeed.sort((pair1, pair2) => pair2[0] - pair1[0]);

  // Initialize a variable to count the number of fleets.
  let fleets = 0;
  // Initialize a variable to keep track of the latest time a fleet reaches the target.
  let latestTime = 0;

  // Iterate through the sorted array.
  for (let i = 0; i < sortedArr.length; i++) {
    // If the time to reach the target for the current car is greater than the latest time, it means this car forms a new fleet.
    if (sortedArr[i][1] > latestTime) {
      // Update the latest time with the time for the current car.
      latestTime = sortedArr[i][1];
      // Increment the fleet count.
      fleets++;
    }
  }
  // Return the number of fleets.
  return fleets;
}

// Example usage and test cases:
console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])); // Expected output: 3
console.log(carFleet(10, [3], [3])); // Expected output: 1
console.log(carFleet(100, [0, 2, 4], [4, 2, 1])); // Expected output: 1
console.log(carFleet(10, [6, 8], [3, 2])); // Expected output: 2
console.log(carFleet(12, [10, 8, 0, 5, 3, 11], [2, 4, 1, 1, 3, 2])); // Expected output: 4
console.log(carFleet(15, [10, 3, 7, 5], [2, 4, 1, 2])); // Expected output: 2
console.log(carFleet(20, [5, 9, 3], [1, 2, 3])); // Expected output: 3
