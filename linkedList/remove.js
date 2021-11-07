/**
 * Write a function, deleteValue(head, val), that
 * accepts the head node of a linked list and a value as an argument
 *
 * The function should delete the node of the linked
 * list that contains the given value.
 *
 * the function should return the head of the list
 *
 * Assume that the linked list only contains unique values.
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
 
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
a.next = b;
b.next = c;
c.next = d;

// const deleteValue = (head, target) => {
//     console.log(head.val)
//   if (head.val === target) {
//     return head.next;
//   }
//   let prev = null;
//   let curr = head;

//   while (curr !== null) {
//     if (curr.val === target) {
//       // delete the node
//       prev.next = curr.next;
//     }
//     prev = curr;
//     curr = curr.next;
//   }
//   return head;
// };
const deleteValue = (head, target) => {
    if(head.val === target) return head.next;
    _deleteValue(head, null, target);
    return head;
};
const _deleteValue = (curr, prev, target) => {
    if(curr === null) {
        return;
    }
  if (curr.val === target) {
    // delete node
    prev.next = curr.next;
    return;
  } 
  _deleteValue(curr.next, curr, target);
};
const print = (head) => {
  if (head === null) return;
  console.log(head.val);
  print(head.next);
};

const newHead = deleteValue(a, "a");

print(a);
console.log("-");
console.log(newHead);
