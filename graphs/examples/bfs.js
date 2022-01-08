/**
   * Given a graph of users and their conections, find the smallest distance between two users.
   * 
   Given the inputs Hannah and Mabel, the answer should be 2 and the path ["Hannah", "Liz", "Mabel"]
   */

class Node {
  constructor(value) {
    this.value = value;
    this.edgesList = [];
  }
  connect(node) {
    this.edgesList.push(node);
    // node.edgesList.push(this);
  }
  getAdjacentNodes() {
    return this.edgesList.map((edge) => edge.value);
  }
  isConnected(node) {
    return this.edgesList.map((edge) => edge.value).indexOf(node.value) > -1;
  }
}

class Graph {
  constructor(nodes) {
    this.nodes = [...nodes];
  }

  addToGraph(node) {
    this.nodes.push(node);
  }
  reconstructPath(visitedNodes, startNode, endNode) {
    let currNode = endNode;
    const shortestPath = [];
    while (currNode !== null) {
      shortestPath.push(currNode);
      currNode = visitedNodes[currNode.value];
    }
  return shortestPath.reverse()
  }
  breadthFirstTraversal(start, end) {
    const queue = [start];
    const visitedNodes = {};
    visitedNodes[start.value] = null;

    while (queue.length > 0) {
      const node = queue.shift();
      if (node.value === end.value) {
        console.log("Found List");
        return this.reconstructPath(visitedNodes, start, end);
      }
      // add its neighbors to the queue
      // track where nodes that we're adding
      // are coming from
      for (const adjacency of node.edgesList) {
        if (!visitedNodes.hasOwnProperty(adjacency)) {
          visitedNodes[adjacency.value] = node;
          queue.push(adjacency);
          console.log(adjacency.value);
        }
      }
      console.log(visitedNodes);
    }
  }
}
const Hannah = new Node("Hannah");
const Mary = new Node("Mary");
const LAX = new Node("LAX");
const Mel = new Node("Mel");
const Max = new Node("Max");
const Dan = new Node("Dan");
const Nis = new Node("Nis");
const Chris = new Node("Chris");
const Nicolette = new Node("Nicolette");
const Yair = new Node("Yair");
const Mabel = new Node("Mabel");
const Liz = new Node("Liz");

Hannah.connect(Max);
Hannah.connect(Mel);
Hannah.connect(Mary);
Hannah.connect(Nis);
Hannah.connect(Liz);
Mel.connect(Max); 
Nis.connect(Dan);
Nis.connect(Chris);
Nis.connect(Yair);
Chris.connect(Nicolette);
Chris.connect(Yair); 
 
Mabel.connect(Liz);
const graph = new Graph([
  Hannah,
  Mary,
  LAX,
  Mel,
  Max,
  Dan,
  Nis,
  Chris,
  Nicolette,
  Yair,
  Mabel,
  Liz,
]);

// console.log({graph});

// console.log(graph.breadthFirstTraversal(DFW, Chris));
graph.breadthFirstTraversal(Hannah, Mabel);
// console.log("isconnected", nodeA.isConnected(nodeE));
