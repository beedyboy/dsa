class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  append(val) {
    if (this.head === null) {
      this.head = new Node(val);
      return;
    }
    this._append(val, this.head);
  }
  _append(val, curr) {
    if (curr.next === null) {
      curr.next = new Node(val);
      return;
    }
    this._append(val, curr.next);
  }
  print() {
    const output = this._print(this.head);
    console.log(output);
  }
  _print(curr) {
    if (curr === null) return "";
    return curr.val + "->" + this._print(curr.next);
  }
  contains(target) {
    return this._contains(this.head, target);
  }
  _contains(curr, target) {
    if (curr === null) return false;
    if (curr.val === target) return true;
    return this._contains(curr.next, target);
  }
}

const list = new LinkedList();
// list.append("a");
// list.append("b");
// list.append("c");
// list.append("d");
// list.print();

// console.log(list.contains("b"));
// console.log(list.contains("c"));
// console.log(list.contains("z"));
list.append(18);
list.append(2);
list.append(10);
// const sumList = (head) => {
//     let sum = 0;
//     let curr = head;
//     while(curr.next !== null) {
//         sum += curr.val;
//         curr = curr.next;
//     }
//     return sum;
// }
const sumList = (head) => {
  if (head === null) return 0;
  return head.val + sumList(head.next);
};
console.log(sumList(list.head));