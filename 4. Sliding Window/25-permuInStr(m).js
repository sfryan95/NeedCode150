// Prompt: Implement a function to check if s2 contains a permutation of s1. Return true if a permutation of s1 exists as a substring of s2, otherwise return false. Both strings only contain lowercase letters.

function checkInclusion(s1, s2) {
  // Your implementation here
}

// Test cases

// Example 1
console.log(checkInclusion("abc", "lecabee")); // Output: true (Explanation: The substring "cab" is a permutation of "abc" and is present in "lecabee")

// Example 2
console.log(checkInclusion("abc", "lecaabee")); // Output: false

// Additional test cases
console.log(checkInclusion("a", "ab")); // Output: true
console.log(checkInclusion("abc", "defabc")); // Output: true
console.log(checkInclusion("abc", "defabg")); // Output: false
console.log(checkInclusion("abcd", "abc")); // Output: false
console.log(checkInclusion("xyz", "xyzzzzz")); // Output: true
console.log(checkInclusion("hello", "ooolleoooleh")); // Output: false
console.log(checkInclusion("adc", "dcda")); // Output: true
