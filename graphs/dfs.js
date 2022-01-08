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

  depthFirstTraversal(start, end, visited) {
      if(!visited) {
          visited = new Set();
      }
    //   keep traversing deeply
    // until you hit the leaf node
    //or you are at the end node
    if (start.value === end.value) {
      console.log("Found it");
      return;
    }
    console.log('Visiting node ', start.value)
    visited.add(start);
    for (const adjacency of start.edgesList) {
      if (!visited.has(adjacency)) {
        this.depthFirstTraversal(adjacency, end, visited);
      }
    }
    // Final 
  }
}
const DFW = new Node("DFW");
const JFK = new Node("JFK");
const LAX = new Node("LAX");
const HNL = new Node("HNL");
const HKG = new Node("HKG");
const SAN = new Node("SAN");
const EWR = new Node("EWR");
const BOS = new Node("BOS");
const MIA = new Node("MIA");
const MCO = new Node("MCO");
const PBI = new Node("PBI");

DFW.connect(LAX);
DFW.connect(JFK);
LAX.connect(HNL);
LAX.connect(EWR);
LAX.connect(SAN);
SAN.connect(HKG);
JFK.connect(BOS);
JFK.connect(MIA);
MIA.connect(MCO);
MCO.connect(PBI);
MIA.connect(PBI);
const graph = new Graph([DFW, JFK, LAX, HKG, HNL, SAN, EWR, BOS, MIA, MCO, PBI]);

// console.log({graph});

// console.log(graph.depthFirstTraversal(DFW, Chris));
graph.depthFirstTraversal(DFW, HKG)
// console.log("isconnected", nodeA.isConnected(nodeE));
