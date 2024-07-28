// Prompt: Implement a function to remove the nth node from the end of a singly linked list. Given the beginning of a linked list head and an integer n, remove the nth node from the end of the list and return the beginning of the list.

function removeNthFromEnd(head, n) {
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
let head1 = createLinkedList([1, 2, 3, 4]);
let newHead1 = removeNthFromEnd(head1, 2);
console.log(printLinkedList(newHead1)); // Output: [1, 2, 4]

// Example 2
let head2 = createLinkedList([5]);
let newHead2 = removeNthFromEnd(head2, 1);
console.log(printLinkedList(newHead2)); // Output: []

// Example 3
let head3 = createLinkedList([1, 2]);
let newHead3 = removeNthFromEnd(head3, 2);
console.log(printLinkedList(newHead3)); // Output: [2]

// Additional test cases
let head4 = createLinkedList([1, 2, 3, 4, 5]);
let newHead4 = removeNthFromEnd(head4, 1);
console.log(printLinkedList(newHead4)); // Output: [1, 2, 3, 4]

let head5 = createLinkedList([1, 2, 3, 4, 5]);
let newHead5 = removeNthFromEnd(head5, 3);
console.log(printLinkedList(newHead5)); // Output: [1, 2, 4, 5]
