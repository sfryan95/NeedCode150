// Prompt: Implement a time-based key-value data structure that supports storing multiple values for the same key at specified timestamps and retrieving the key's value at a specified timestamp. Implement the TimeMap class with the following methods:
// - TimeMap() initializes the object.
// - void set(String key, String value, int timestamp) stores the key with the value at the given timestamp.
// - String get(String key, int timestamp) returns the most recent value of the key with a timestamp less than or equal to the given timestamp. If there are no values, return "".

class TimeMap {
  constructor() {
      // Your implementation here
  }

  set(key, value, timestamp) {
      // Your implementation here
  }

  get(key, timestamp) {
      // Your implementation here
  }
}

// Test cases
const timeMap = new TimeMap();
console.log(timeMap.set("alice", "happy", 1)); // Output: null
console.log(timeMap.get("alice", 1));          // Output: "happy"
console.log(timeMap.get("alice", 2));          // Output: "happy"
console.log(timeMap.set("alice", "sad", 3));   // Output: null
console.log(timeMap.get("alice", 3));          // Output: "sad"
console.log(timeMap.get("alice", 4));          // Output: "sad"
console.log(timeMap.set("bob", "joyful", 5));  // Output: null
console.log(timeMap.get("bob", 5));            // Output: "joyful"
console.log(timeMap.get("bob", 6));            // Output: "joyful"
console.log(timeMap.get("alice", 0));          // Output: ""
console.log(timeMap.get("alice", 4));          // Output: "sad"
