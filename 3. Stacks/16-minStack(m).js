class MinStack {
  constructor() {
    // Initialize the main stack to store all elements
    this.stack = [];
    // Initialize the minStack to store the minimum values
    this.minStack = [];
  }

  /**
   * Pushes a value onto the stack and updates the minStack.
   * @param {number} val - The value to be pushed onto the stack.
   */
  push(val) {
    // Push the value onto the main stack
    this.stack.push(val);

    // Push the value onto the minStack if it's the smallest value seen so far
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    } else {
      // Otherwise, push the current minimum value again to maintain synchronization
      this.minStack.push(this.minStack[this.minStack.length - 1]);
    }
  }

  /**
   * Removes the top value from the stack and updates the minStack.
   * @returns {number} The value removed from the stack.
   */
  pop() {
    // Remove the top value from the minStack to keep it in sync
    this.minStack.pop();
    // Remove and return the top value from the main stack
    return this.stack.pop();
  }

  /**
   * Gets the top value of the stack without removing it.
   * @returns {number} The top value of the stack.
   */
  top() {
    // Return the top value from the main stack
    return this.stack[this.stack.length - 1];
  }

  /**
   * Retrieves the minimum value in the stack.
   * @returns {number} The minimum value in the stack.
   */
  getMin() {
    // Return the top value from the minStack, which is the current minimum
    return this.minStack[this.minStack.length - 1];
  }
}

// Example usage:
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Expected output: -3
minStack.pop();
console.log(minStack.top()); // Expected output: 0
console.log(minStack.getMin()); // Expected output: -2
