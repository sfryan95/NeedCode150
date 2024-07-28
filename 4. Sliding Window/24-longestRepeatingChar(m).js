// Prompt: Implement a function to find the length of the longest substring that contains only one distinct character after performing at most k replacements. The input string s consists of only uppercase English characters.

function characterReplacement(s, k) {
  // Your implementation here
}

// Test cases

// Example 1
console.log(characterReplacement("XYYX", 2)); // Output: 4 (Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's)

// Example 2
console.log(characterReplacement("AAABABB", 1)); // Output: 5

// Additional test cases
console.log(characterReplacement("AABABBA", 1)); // Output: 4
console.log(characterReplacement("ABAB", 2)); // Output: 4
console.log(characterReplacement("ABBB", 2)); // Output: 4
console.log(characterReplacement("ABCDE", 2)); // Output: 3
console.log(characterReplacement("BAAA", 0)); // Output: 3
console.log(characterReplacement("AAAA", 0)); // Output: 4
console.log(characterReplacement("ABABBA", 2)); // Output: 6
console.log(characterReplacement("ABCDE", 0)); // Output: 1
