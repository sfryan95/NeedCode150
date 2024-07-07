/**
 * @param {string} s - A string consisting of '(', ')', '{', '}', '[' and ']'.
 * @return {boolean} - Returns true if s is a valid string, false otherwise.
 */
function isValid(s) {
  if (s.length % 2 === 1) return false; // Early return if the string length is odd

  const openStack = [];
  const matchingPairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (curr === '(' || curr === '[' || curr === '{') {
      openStack.push(curr);
    } else {
      if (openStack.length === 0 || openStack[openStack.length - 1] !== matchingPairs[curr]) {
        return false;
      }
      openStack.pop();
    }
  }
  
  return openStack.length === 0; // The stack should be empty if the string is valid
}

// Example usage:
console.log(isValid("()")); // Expected output: true
console.log(isValid("()[]{}")); // Expected output: true
console.log(isValid("(]")); // Expected output: false
console.log(isValid("([)]")); // Expected output: false
console.log(isValid("{[]}")); // Expected output: true
