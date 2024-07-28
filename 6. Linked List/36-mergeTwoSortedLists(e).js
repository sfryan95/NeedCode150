// Prompt: Implement a function to merge two sorted linked lists. Given the heads of two sorted linked lists list1 and list2, merge the two lists into one sorted linked list and return the head of the new sorted linked list. The new list should be made up of nodes from list1 and list2.

function mergeTwoLists(list1, list2) {
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
let list1 = createLinkedList([1, 2, 4]);
let list2 = createLinkedList([1, 3, 5]);
let mergedList1 = mergeTwoLists(list1, list2);
console.log(printLinkedList(mergedList1)); // Output: [1, 1, 2, 3, 4, 5]

// Example 2
let list3 = createLinkedList([]);
let list4 = createLinkedList([]);
let mergedList2 = mergeTwoLists(list3, list4);
console.log(printLinkedList(mergedList2)); // Output: []

// Example 3
let list5 = createLinkedList([]);
let list6 = createLinkedList([0]);
let mergedList3 = mergeTwoLists(list5, list6);
console.log(printLinkedList(mergedList3)); // Output: [0]

// Additional test cases
let list7 = createLinkedList([2, 6, 8]);
let list8 = createLinkedList([1, 3, 7, 9]);
let mergedList4 = mergeTwoLists(list7, list8);
console.log(printLinkedList(mergedList4)); // Output: [1, 2, 3, 6, 7, 8, 9]

let list9 = createLinkedList([5]);
let list10 = createLinkedList([1, 2, 3, 4, 6]);
let mergedList5 = mergeTwoLists(list9, list10);
console.log(printLinkedList(mergedList5)); // Output: [1, 2, 3, 4, 5, 6]
