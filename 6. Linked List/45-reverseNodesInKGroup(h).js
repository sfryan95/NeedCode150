// Prompt: Implement a function to reverse nodes in k-group. Given the head of a singly linked list and a positive integer k, reverse the first k nodes in the linked list, then the next k nodes, and so on. If there are fewer than k nodes left, leave the nodes as they are. Return the modified list after reversing the nodes in each group of k. You are only allowed to modify the nodes' next pointers, not the values of the nodes.

function reverseKGroup(head, k) {
  // Step 1: Initialize a dummy node and point it to the head. This will help with edge cases.
  
  // Step 2: Define a helper function to reverse a section of the linked list.
  
  // Step 3: Count the total number of nodes in the linked list.
  
  // Step 4: Iterate through the list in chunks of k nodes.
  
  // Step 5: For each chunk, check if there are at least k nodes left to reverse.
  
  // Step 6: Reverse the k nodes and connect the previous part of the list to the reversed chunk.
  
  // Step 7: Move to the next chunk of k nodes.
  
  // Step 8: Return the new head of the modified list.
}

// Test cases

// Example 1
let head1 = createLinkedList([1, 2, 3, 4, 5, 6]);
let k1 = 3;
console.log(printLinkedList(reverseKGroup(head1, k1))); // Output: [3, 2, 1, 6, 5, 4]

// Example 2
let head2 = createLinkedList([1, 2, 3, 4, 5]);
let k2 = 3;
console.log(printLinkedList(reverseKGroup(head2, k2))); // Output: [3, 2, 1, 4, 5]

// Additional test cases
let head3 = createLinkedList([1, 2]);
let k3 = 2;
console.log(printLinkedList(reverseKGroup(head3, k3))); // Output: [2, 1]

let head4 = createLinkedList([1]);
let k4 = 1;
console.log(printLinkedList(reverseKGroup(head4, k4))); // Output: [1]

let head5 = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8]);
let k5 = 3;
console.log(printLinkedList(reverseKGroup(head5, k5))); // Output: [3, 2, 1, 6, 5, 4, 7, 8]

// Additional helper functions to create and print linked lists

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

// ListNode class definition
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}
