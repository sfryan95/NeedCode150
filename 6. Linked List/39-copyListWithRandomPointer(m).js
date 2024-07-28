// Prompt: Implement a function to create a deep copy of a linked list with random pointers. Each node in the linked list contains an additional pointer random, which may point to any node in the list, or null. The deep copy should consist of exactly n new nodes, each including the original value val, a next pointer to the new node corresponding to the next pointer of the original node, and a random pointer to the new node corresponding to the random pointer of the original node. None of the pointers in the new list should point to nodes in the original list. Return the head of the copied linked list.

function copyRandomList(head) {
  // Your implementation here
}

// Test cases
function ListNode(val, next = null, random = null) {
  this.val = val;
  this.next = next;
  this.random = random;
}

function createLinkedList(arr) {
  if (arr.length === 0) return null;

  let nodes = arr.map(([val]) => new ListNode(val));
  let head = nodes[0];

  arr.forEach(([, randomIndex], index) => {
      if (index < arr.length - 1) nodes[index].next = nodes[index + 1];
      if (randomIndex !== null) nodes[index].random = nodes[randomIndex];
  });

  return head;
}

function printLinkedList(head) {
  let result = [];
  let current = head;
  let index = 0;
  let map = new Map();

  while (current) {
      map.set(current, index);
      result.push([current.val, current.random ? null : null]);
      current = current.next;
      index++;
  }

  current = head;
  index = 0;

  while (current) {
      if (current.random) {
          result[index][1] = map.get(current.random);
      }
      current = current.next;
      index++;
  }

  return result;
}

// Example 1
let head1 = createLinkedList([[3, null], [7, 3], [4, 0], [5, 1]]);
let copiedHead1 = copyRandomList(head1);
console.log(printLinkedList(copiedHead1)); // Output: [[3,null],[7,3],[4,0],[5,1]]

// Example 2
let head2 = createLinkedList([[1, null], [2, 2], [3, 2]]);
let copiedHead2 = copyRandomList(head2);
console.log(printLinkedList(copiedHead2)); // Output: [[1,null],[2,2],[3,2]]

// Additional test cases
let head3 = createLinkedList([[1, 1], [2, 0]]);
let copiedHead3 = copyRandomList(head3);
console.log(printLinkedList(copiedHead3)); // Output: [[1,1],[2,0]]

let head4 = createLinkedList([]);
let copiedHead4 = copyRandomList(head4);
console.log(printLinkedList(copiedHead4)); // Output: []

let head5 = createLinkedList([[1, null]]);
let copiedHead5 = copyRandomList(head5);
console.log(printLinkedList(copiedHead5)); // Output: [[1,null]]
