class Node {
  constructor(val) {
    this.val = val;
    this.edgesList = [];
  }
  connect(node) {
    this.edgesList.push(node);
    // node.edgesList.push(this);
  }
  getAdjacentNodes() {
    return this.edgesList.map((edge) => edge.val);
  }
  isConnected(node){
    return  this.edgesList.map(edge => edge.val).indexOf(node.val) > -1
  }
}

class Graph {
  constructor(nodes) {
    this.nodes = [...nodes];
  }

  addToGraph(node) {
    this.nodes.push(node);
  }
}
const nodeA = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
const nodeD = new Node("D");
const nodeE = new Node("E");

nodeA.connect(nodeB);
nodeA.connect(nodeD);
nodeB.connect(nodeC);
nodeC.connect(nodeD);
nodeC.connect(nodeE);
nodeD.connect(nodeE);
const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE]);

for (let node of graph.nodes) {
    console.log('node', node.val);
    for(let connectedNode of node.edgesList) {
        console.log(`Node ${node.val} is connected to ${connectedNode.val}`)
    }

}
// console.log({graph});

console.log("node", nodeA.getAdjacentNodes());
console.log("isconnected", nodeA.isConnected(nodeE));
