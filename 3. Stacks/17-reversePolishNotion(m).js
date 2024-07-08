/**
 * @param {string[]} tokens - An array of strings representing a valid arithmetic expression in Reverse Polish Notation.
 * @return {number} - Returns the integer that represents the evaluation of the expression.
 */
function evalRPN(tokens) {
  // Define an object to map operators to their corresponding functions
  const operators = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => {
      // Ensure integer division with truncation towards zero
      const result = num1 / num2;
      return result < 0 ? Math.ceil(result) : Math.floor(result);
    },
  };

  // Initialize an empty stack to store numbers
  let numStack = [];

  // Iterate through each token in the input array
  for (let i = 0; i < tokens.length; i++) {
    // Check if the current token is a number
    if (tokens[i].match(/^-?\d+$/)) {  // Match integers including negative numbers
      // If it is a number, convert it to a number and push it onto the stack
      numStack.push(Number(tokens[i]));
    } else {
      // If it is an operator, pop the top two numbers from the stack
      const num2 = numStack.pop();
      const num1 = numStack.pop();

      // Apply the operator to the two numbers
      const result = operators[tokens[i]](num1, num2);

      // Push the result back onto the stack
      numStack.push(result);
    }
  }

  // The final result is the last remaining item on the stack
  return numStack[0];
}

// Example usage:
console.log(evalRPN(['1', '2', '+', '3', '*', '4', '-'])); // Expected output: 5
console.log(evalRPN(["2","1","+","3","*"])); // Expected output: 9
console.log(evalRPN(["4","13","5","/","+"])); // Expected output: 6
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])); // Expected output: 22
