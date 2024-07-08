/**
 * @param {number} n - The number of pairs of parentheses.
 * @return {string[]} - Returns all well-formed parentheses strings that can be generated with n pairs of parentheses.
 */
function generateParentheses(n) {
  // Result list to store the valid parentheses strings
  const result = [];

  // Helper function to generate parentheses
  function generate(current, openCount, closeCount) {
    // Base case: when the current string's length is 2 * n
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    // If we can add an open parenthesis, do it
    if (openCount < n) {
      generate(current + '(', openCount + 1, closeCount);
    }

    // If we can add a close parenthesis, do it
    if (closeCount < openCount) {
      generate(current + ')', openCount, closeCount + 1);
    }
  }

  // Initial call to the helper function
  generate('', 0, 0);

  return result;
}

// Example usage:
console.log(generateParentheses(1)); // Expected output: ["()"]
console.log(generateParentheses(2)); // Expected output: ["(())", "()()"]
console.log(generateParentheses(3)); // Expected output: ["((()))", "(()())", "(())()", "()(())", "()()()"]
console.log(generateParentheses(0)); // Expected output: [""]
