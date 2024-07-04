/**
 * Encodes a list of strings to a single string.
 * @param {string[]} strs - An array of strings to encode.
 * @return {string} - The encoded single string.
 */
function encode(strs) {
  // Your code here
}

/**
 * Decodes a single string to a list of strings.
 * @param {string} s - The encoded string to decode.
 * @return {string[]} - The decoded list of strings.
 */
function decode(s) {
  // Your code here
}


console.log(encode(["hello", "world"]));
// Expected output: "5#hello5#world"

console.log(encode([""]));
// Expected output: "0#"

console.log(encode(["a", "b", "c"]));
// Expected output: "1#a1#b1#c"

// Test Cases for Decode
console.log(decode("5#hello5#world"));
// Expected output: ["hello", "world"]

console.log(decode("0#"));
// Expected output: [""]

console.log(decode("1#a1#b1#c"));
// Expected output: ["a", "b", "c"]