// Prompt: Implement a function to reorder a singly linked list. Given the head of a singly linked list, reorder the nodes of the list in a specific order such that for a list of length n, the nodes are reordered to be in the following order: [0, n-1, 1, n-2, 2, n-3, ...]. You may not modify the values in the list's nodes, but must reorder the nodes themselves.

function reorderList(head) {
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
let head1 = createLinkedList([2, 4, 6, 8]);
reorderList(head1);
console.log(printLinkedList(head1)); // Output: [2, 8, 4, 6]

// Example 2
let head2 = createLinkedList([2, 4, 6, 8, 10]);
reorderList(head2);
console.log(printLinkedList(head2)); // Output: [2, 10, 4, 8, 6]

// Additional test cases
let head3 = createLinkedList([1, 2, 3, 4, 5, 6]);
reorderList(head3);
console.log(printLinkedList(head3)); // Output: [1, 6, 2, 5, 3, 4]

let head4 = createLinkedList([1, 2, 3, 4, 5, 6, 7]);
reorderList(head4);
console.log(printLinkedList(head4)); // Output: [1, 7, 2, 6, 3, 5, 4]

let head5 = createLinkedList([1]);
reorderList(head5);
console.log(printLinkedList(head5)); // Output: [1]

let head6 = createLinkedList([1, 2]);
reorderList(head6);
console.log(printLinkedList(head6)); // Output: [1, 2]
