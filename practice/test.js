let tasks = [
    { name: 1, stage: 0},
    { name: 2, stage: 0},
    { name: 3, stage: 0},
];

function next(name, stage){
    const allTasks = [...tasks]; 
    // const item = tasks.find(x => x.name === name);
allTasks.forEach((el, index) => {
    if(el.name === name) {
        el.stage = stage;
    }
});
tasks = allTasks;
}

// console.log({tasks});
// next(2, 1);
// console.log({tasks});


const dp = Array.from(Array(3 + 2), () => Array(3 + 2).fill(0));

const numbers = [1,2,3,4,5,6];
// console.log({dp}) 
// const bd = numbers.reduce(a,b);
// console.log({bd})

let exampleNode = {
    value: 0,
    next: {
      value: 1,
      next: {
        value: 2,
        next: null
      }
    }
  };
  
  function printList(node) {
    //check if the linked list is not empty
    let temp = node
    console.log(temp)
    if(node === null) return undefined;
    //create temp variable to hold the value of 
    //the node from the root 
     while(temp !== null) {
      console.log(temp.value);
      temp = temp.next;
     }
    // Print all nodes in the linkedlist given the first node
  }
  
  printList(exampleNode);
  
let animals = ["j", "e"] ;
animals.reverse();
console.log(animals.shift())