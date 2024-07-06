/**
 * @param {string[]} strs - An array of strings.
 * @return {string[][]} - A 2D array where each subarray contains grouped anagrams.
 */
function groupAnagrams(strs) {
  const result = {};

  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split('').sort().join('');
    if (result[key]) {
      result[key].push(strs[i]);
    } else {
      result[key] = [strs[i]];
    }
  }
  return Object.values(result);
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// Expected output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

console.log(groupAnagrams(['']));
// Expected output: [[""]]

console.log(groupAnagrams(['a']));
// Expected output: [["a"]]
