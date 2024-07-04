function isPalindrome(s) {
  // The regex /[^a-zA-Z0-9]/g matches all characters that are not letters or digits.
  // s.replace(/[^a-zA-Z0-9]/g, '') removes all spaces, punctuation, and special characters.
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
      if (s[left] !== s[right]) {
      return false
      }
      left++;
      right--;
  }

  return true;
  }