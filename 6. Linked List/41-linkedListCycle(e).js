// Prompt: Implement a function to detect if there is a cycle in a linked list. Given the beginning of a linked list head, return true if there is a cycle in the linked list, otherwise return false. A cycle exists if at least one node in the list can be visited again by following the next pointer. The tail node of the list will set its next pointer to the index-th node to form a cycle, or null if no cycle exists. Note: the index is not given to you as a parameter.

function hasCycle(head) {
  // Your implementation here
}

// Test cases
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function createLinkedListWithCycle(arr, pos) {
  let dummy = new ListNode(0);
  let current = dummy;
  let cycleNode = null;
  arr.forEach((val, index) => {
      current.next = new ListNode(val);
      current = current.next;
      if (index === pos) {
          cycleNode = current;
      }
  });
  if (cycleNode) {
      current.next = cycleNode;
  }
  return dummy.next;
}

// Example 1
let head1 = createLinkedListWithCycle([1, 2, 3, 4], 1);
console.log(hasCycle(head1)); // Output: true

// Example 2
let head2 = createLinkedListWithCycle([1, 2], -1);
console.log(hasCycle(head2)); // Output: false

// Additional test cases
let head3 = createLinkedListWithCycle([1], -1);
console.log(hasCycle(head3)); // Output: false

let head4 = createLinkedListWithCycle([1, 2, 3, 4, 5], 0);
console.log(hasCycle(head4)); // Output: tr
