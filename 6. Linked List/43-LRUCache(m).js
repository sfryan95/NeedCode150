// Prompt: Implement the Least Recently Used (LRU) cache class LRUCache. The class should support the following operations:
// - LRUCache(int capacity) initializes the LRU cache of size capacity.
// - int get(int key) returns the value corresponding to the key if the key exists, otherwise returns -1.
// - void put(int key, int value) updates the value of the key if the key exists. Otherwise, adds the key-value pair to the cache. If the introduction of the new pair causes the cache to exceed its capacity, remove the least recently used key.
// A key is considered used if a get or a put operation is called on it. Ensure that get and put each run in O(1) average time complexity.

class LRUCache {
  constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map();
  }

  get(key) {
      if (!this.cache.has(key)) {
          return -1;
      }
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
  }

  put(key, value) {
      if (this.cache.has(key)) {
          this.cache.delete(key);
      } else if (this.cache.size >= this.capacity) {
          this.cache.delete(this.cache.keys().next().value);
      }
      this.cache.set(key, value);
  }
}

// Test cases

// Example 1
const lRUCache = new LRUCache(2);
console.log(lRUCache.put(1, 10)); // Output: null, cache: {1=10}
console.log(lRUCache.get(1));     // Output: 10, cache: {1=10}
console.log(lRUCache.put(2, 20)); // Output: null, cache: {1=10, 2=20}
console.log(lRUCache.put(3, 30)); // Output: null, cache: {2=20, 3=30}, key=1 was evicted
console.log(lRUCache.get(2));     // Output: 20, cache: {2=20, 3=30}
console.log(lRUCache.get(1));     // Output: -1, key=1 not found

// Additional test cases
const lRUCache2 = new LRUCache(3);
console.log(lRUCache2.put(1, 1)); // Output: null, cache: {1=1}
console.log(lRUCache2.put(2, 2)); // Output: null, cache: {1=1, 2=2}
console.log(lRUCache2.put(3, 3)); // Output: null, cache: {1=1, 2=2, 3=3}
console.log(lRUCache2.get(1));    // Output: 1, cache: {2=2, 3=3, 1=1}
console.log(lRUCache2.put(4, 4)); // Output: null, cache: {3=3, 1=1, 4=4}, key=2 was evicted
console.log(lRUCache2.get(2));    // Output: -1, key=2 not found
console.log(lRUCache2.get(3));    // Output: 3, cache: {1=1, 4=4, 3=3}
console.log(lRUCache2.put(5, 5)); // Output: null, cache: {4=4, 3=3, 5=5}, key=1 was evicted
console.log(lRUCache2.get(1));    // Output: -1, key=1 not found
console.log(lRUCache2.get(4));    // Output: 4, cache: {3=3, 5=5, 4=4}
console.log(lRUCache2.get(5));    // Output: 5, cache: {3=3, 4=4, 5=5}
