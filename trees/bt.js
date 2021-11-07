/**
 * Write a function, bfs(root, target), that takes in the root
 * of a binary tree and a target value as arguments.
 *
 * The function should return a boolean indicating whetehr
 * or not the tree contains the target value
 */
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

// a
// /  \
// b   c
// /\   \
// d e   f
// A-b-c-d-e-f
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const breathFirstPrint = (root) => {
  const queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift(); //it has been visited
    console.log(curr.val);
    if (curr.left !== null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }
};

// breathFirstPrint(a);

const bfs = (root, target) => {
  const queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift(); //it has been visited
    if (curr.val === target) {
      return true;
    }
    if (curr.left !== null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }
  return false;
};
