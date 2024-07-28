// Prompt: Implement a function to add two non-empty linked lists, where each represents a non-negative integer. The digits are stored in reverse order, and each of the nodes contains a single digit. Return the sum of the two numbers as a linked list.

function addTwoNumbers(l1, l2) {
  // Your implementation here
}

// Test cases
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function createLinkedList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
      current.next = new ListNode(val);
      current = current.next;
  }
  return dummy.next;
}

function printLinkedList(head) {
  let result = [];
  let current = head;
  while (current) {
      result.push(current.val);
      current = current.next;
  }
  return result;
}

// Example 1
let l1_1 = createLinkedList([2, 4, 3]);
let l2_1 = createLinkedList([5, 6, 4]);
let result1 = addTwoNumbers(l1_1, l2_1);
console.log(printLinkedList(result1)); // Output: [7, 0, 8]

// Example 2
let l1_2 = createLinkedList([0]);
let l2_2 = createLinkedList([0]);
let result2 = addTwoNumbers(l1_2, l2_2);
console.log(printLinkedList(result2)); // Output: [0]

// Example 3
let l1_3 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
let l2_3 = createLinkedList([9, 9, 9, 9]);
let result3 = addTwoNumbers(l1_3, l2_3);
console.log(printLinkedList(result3)); // Output: [8, 9, 9, 9, 0, 0, 0, 1]

// Additional test cases
let l1_4 = createLinkedList([2, 4, 3]);
let l2_4 = createLinkedList([5, 6, 4, 9]);
let result4 = addTwoNumbers(l1_4, l2_4);
console.log(printLinkedList(result4)); // Output: [7, 0, 8, 9]

let l1_5 = createLinkedList([9]);
let l2_5 = createLinkedList([1]);
let result5 = addTwoNumbers(l1_5, l2_5);
console.log(printLinkedList(result5)); // Output: [0, 1]
