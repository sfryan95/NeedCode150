// Prompt: Implement a function to merge k sorted linked lists. Given an array of k linked lists, where each list is sorted in ascending order, return the sorted linked list that is the result of merging all of the individual linked lists.

function mergeKLists(lists) {
  // Step 1: Define a helper function to merge two sorted linked lists.
  
  // Step 2: Initialize a min-heap (priority queue) to keep track of the smallest elements in each list.
  
  // Step 3: Add the first node of each linked list to the min-heap.
  
  // Step 4: Initialize a dummy node to build the result list and a current pointer.
  
  // Step 5: While the heap is not empty, do the following:
  //   - Extract the smallest node from the heap.
  //   - Add the smallest node to the result list.
  //   - If there is a next node in the extracted node's list, add it to the heap.
  
  // Step 6: Return the result list starting from the next node of the dummy node.
}

// Helper function to merge two sorted linked lists.
function mergeTwoLists(l1, l2) {
  // Your implementation here
}

// ListNode class definition
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// Test cases

// Example 1
let list1 = createLinkedList([1, 2, 4]);
let list2 = createLinkedList([1, 3, 5]);
let list3 = createLinkedList([3, 6]);
let lists1 = [list1, list2, list3];
console.log(printLinkedList(mergeKLists(lists1))); // Output: [1, 1, 2, 3, 3, 4, 5, 6]

// Example 2
let lists2 = [];
console.log(printLinkedList(mergeKLists(lists2))); // Output: []

// Example 3
let lists3 = [createLinkedList([])];
console.log(printLinkedList(mergeKLists(lists3))); // Output: []

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
