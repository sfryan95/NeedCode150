/**
 * @param {character[][]} board - A 9x9 2D array representing a Sudoku board.
 * @return {boolean} - True if the board is valid, false otherwise.
 */
function isValidSudoku(board) {
  // Initialize three arrays of sets to keep track of seen numbers in rows, columns, and 3x3 sub-boxes
  const rows = Array.from({ length: 9 }, () => new Set());
  const columns = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  // Iterate through each cell in the 9x9 board
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // Check if the current cell contains a number (i.e., not '.')
      if (board[i][j] !== '.') {
        const num = board[i][j]; // Get the number at the current cell
        // Calculate the index of the 3x3 sub-box
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        
        // Check if the number is already in the corresponding row, column, or 3x3 sub-box
        if (rows[i].has(num) || columns[j].has(num) || boxes[boxIndex].has(num)) {
          return false; // If duplicate is found, the board is not valid
        }
        
        // Add the number to the corresponding row, column, and 3x3 sub-box sets
        rows[i].add(num);
        columns[j].add(num);
        boxes[boxIndex].add(num);
      }
    }
  }
  
  // If no duplicates are found after checking all cells, return true (the board is valid)
  return true;
}

// Test case 1: Valid Sudoku board
console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
);
// Expected output: true

// Test case 2: Invalid Sudoku board (duplicate '8' in the first column)
console.log(
  isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
);
// Expected output: false

// Test case 3: Invalid Sudoku board (multiple issues)
console.log(
  isValidSudoku([
    ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
    ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
    ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
    ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
    ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
    ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
    ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
  ])
);
// Expected output: false
