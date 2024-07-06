class MinStack {
  constructor() {
    // Initialize your stack and a supporting stack for the minimum values
  }

  push(val) {
    // Implement push operation
  }

  pop() {
    // Implement pop operation
  }

  top() {
    // Implement top operation
  }

  getMin() {
    // Implement getMin operation
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
