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

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// a
// /  \
// b   c
// /\   \
// d e   f
// a-b-d-e-c-f

// const depthFirstPrint = (root) => {
//   const stack = [root];

//   while (stack.length > 0) {
//     const curr = stack.pop();
//     console.log(curr.val);
//     // add current children to the top of the stack
//     if (curr.right !== null) {
//         stack.push(curr.right);
//     }
//     if (curr.left !== null) {
//       stack.push(curr.left);
//     }
//   }//O(n) rime and space
// };
const depthFirstPrint = (root) => { //O(n) rime and space
    if(root === null) return; 
    console.log(root.val)
    depthFirstPrint(root.left);
    depthFirstPrint(root.right);
}
const PreOrder = (root) => { //O(n) rime and space
    if(root === null) return; 
    console.log(root.val)
    depthFirstPrint(root.left);
    depthFirstPrint(root.right);
}

const PostOrder = (root) => { //O(n) rime and space
    if(root === null) return; 
    depthFirstPrint(root.left);
    depthFirstPrint(root.right);
    console.log(root.val)
}
const InOrder = (root) => { //O(n) rime and space
    if(root === null) return; 
    depthFirstPrint(root.left);
    console.log(root.val)
    depthFirstPrint(root.right);
}


depthFirstPrint(a);

/** 
 * Write a function SumTree, that takes in the root of a binary trree as an argument
 * 
 * The function should return the total sum of all value s in the tree.
 * You can assume that the tree only contains number values
 */