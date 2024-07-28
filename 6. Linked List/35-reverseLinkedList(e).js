// Prompt: Implement a function to reverse a singly linked list. Given the beginning of a singly linked list head, reverse the list and return the new beginning of the list.

function reverseLinkedList(head) {
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
let head1 = createLinkedList([0, 1, 2, 3]);
let reversedHead1 = reverseLinkedList(head1);
console.log(printLinkedList(reversedHead1)); // Output: [3, 2, 1, 0]

// Example 2
let head2 = createLinkedList([]);
let reversedHead2 = reverseLinkedList(head2);
console.log(printLinkedList(reversedHead2)); // Output: []

// Additional test cases
let head3 = createLinkedList([1]);
let reversedHead3 = reverseLinkedList(head3);
console.log(printLinkedList(reversedHead3)); // Output: [1]

let head4 = createLinkedList([1, 2, 3, 4, 5]);
let reversedHead4 = reverseLinkedList(head4);
console.log(printLinkedList(reversedHead4)); // Output: [5, 4, 3, 2, 1]
