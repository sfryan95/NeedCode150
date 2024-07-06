/**
 * Encodes a list of strings to a single string.
 * @param {string[]} strs - An array of strings to encode.
 * @return {string} - The encoded single string.
 */
function encode(strs) {
  let newStr = '';
  for (const str of strs) {
    newStr += str.length + '#' + str;
  }
  return newStr;
}

/**
 * Decodes a single string to a list of strings.
 * @param {string} s - The encoded string to decode.
 * @return {string[]} - The decoded list of strings.
 */
function decode(s) {
  const result = [];
  let i = 0;

  while (i < s.length) {
    // Find the delimiter position
    let j = i;
    while (s[j] !== '#') {
      j++;
    }
    // Extract the length of the next string
    const length = parseInt(s.substring(i, j));

    // Extract the string using the length
    const str = s.substring(j + 1, j + 1 + length);
    result.push(str);

    // Move the index past the current string and delimiter
    i = j + 1 + length;
  }

  return result;
}

console.log(encode(['hello', 'world']));
// Expected output: "5#hello5#world"

console.log(encode(['']));
// Expected output: "0#"

console.log(encode(['a', 'b', 'c']));
// Expected output: "1#a1#b1#c"

// Test Cases for Decode
console.log(decode('5#hello5#world'));
// Expected output: ["hello", "world"]

console.log(decode('0#'));
// Expected output: [""]

console.log(decode('1#a1#b1#c'));
// Expected output: ["a", "b", "c"]
