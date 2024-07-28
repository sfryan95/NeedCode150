// Prompt: Implement a function to search for a target value in an m x n 2D integer array matrix. Each row in the matrix is sorted in non-decreasing order, and the first integer of every row is greater than the last integer of the previous row. The function should return true if the target exists in the matrix, otherwise return false. The solution must run in O(log(m * n)) time.

function searchMatrix(matrix, target) {
  let start = 0;
  let end = matrix.length - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (matrix[mid][0] > target) {
      end = mid - 1;
    } else if (matrix[mid][matrix[mid].length-1] < target) {
      start = mid + 1;
    } else {
      let innerStart = 0;
      let innerEnd = matrix[mid].length - 1;
      while (innerStart <= innerEnd) {
        let innerMid = Math.floor((innerStart + innerEnd) / 2);
        if (matrix[mid][innerMid] === target) {
          return true;
        } else if (matrix[mid][innerMid] > target) {
          innerEnd = innerMid - 1;
        }
        else {
          innerStart = innerMid + 1;
        }
      }
      return false;
    }
    
  }
  return false
}

// Test cases
console.log(searchMatrix([[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]], 10)); // Output: true
console.log(searchMatrix([[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]], 15)); // Output: false
console.log(searchMatrix([[1, 3, 5]], 3)); // Output: true
console.log(searchMatrix([[1, 3, 5]], 4)); // Output: false
console.log(searchMatrix([[1], [3], [5]], 3)); // Output: true
console.log(searchMatrix([[1], [3], [5]], 2)); // Output: false
console.log(searchMatrix([[1, 2], [3, 4]], 4)); // Output: true
console.log(searchMatrix([[1, 2], [3, 4]], 0)); // Output: false
