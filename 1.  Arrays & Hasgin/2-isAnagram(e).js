/**
 * @param {string} s - The first input string.
 * @param {string} t - The second input string.
 * @return {boolean} - True if the strings are anagrams, false otherwise.
 */
export default function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const charCount = {};

  // Count the frequency of each character in the first string
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Decrease the frequency count for each character in the second string
  for (let char of t) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  // Check if all counts are zero
  for (let count in charCount) {
    if (charCount[count] !== 0) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram('racecar', 'carrace'));
console.log(isAnagram('jar', 'jam'));
