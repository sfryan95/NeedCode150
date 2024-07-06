/**
 * @param {string} s - A string consisting of '(', ')', '{', '}', '[' and ']'.
 * @return {boolean} - Returns true if s is a valid string, false otherwise.
 */
function isValid(s) {
  // Implementation here
}

// Example usage:
console.log(isValid("()")); // Expected output: true
console.log(isValid("()[]{}")); // Expected output: true
console.log(isValid("(]")); // Expected output: false
console.log(isValid("([)]")); // Expected output: false
console.log(isValid("{[]}")); // Expected output: true
