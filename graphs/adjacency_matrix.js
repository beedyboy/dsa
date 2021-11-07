const vertices = ["A", "B", "C", "D", "E"];
const vertexIdxs = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
};
const adjacencyMatrix = [
  [0, 1, 0, 1, 0], //Node A
  [1, 0, 1, 0, 0], // Node B
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0],
];

// findAjacencies
const findAjacencies = (node) => {
  const adjacentNodes = [];
  // get the row in the matrix
  for (let i = 0; i < vertices.length; i++) {
    nodeVertex = vertexIdxs[node];
    if (adjacencyMatrix[nodeVertex][i] === 1) {
      adjacentNodes.push(vertices[i]);
    }
  }

  // loop through the row
  // if there is 1, push that node
  // otherwise skip
  return adjacentNodes;
};

console.log(findAjacencies("E"));

// isConnected

const isConnected = (node1, node2) => {
  const nodeIdx1 = vertexIdxs[node1];
  const nodeIdx2 = vertexIdxs[node2];
  return !!adjacencyMatrix[nodeIdx1][nodeIdx2]
};

console.log(isConnected('C', 'B'))