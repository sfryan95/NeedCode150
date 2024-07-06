/**
 * @param {string} s - A string consisting of '(', ')', '{', '}', '[' and ']'.
 * @return {boolean} - Returns true if s is a valid string, false otherwise.
 */
function isValidParen(s) {
  // Implementation here
}

// Example usage:
console.log(isValidParen("()")); // Expected output: true
console.log(isValidParen("()[]{}")); // Expected output: true
console.log(isValidParen("(]")); // Expected output: false
console.log(isValidParen("([)]")); // Expected output: false
console.log(isValidParen("{[]}")); // Expected output: true
