//edges list + vertices list
const vertices = ["A", "B", "C", "D", "E"];
const edges = [
  ["A", "B"],
  ["A", "D"],
  ["B", "C"],
  ["C", "D"],
  ["C", "E"],
  ["D", "E"],
];

/**
 * Find the adjacent nodes
 *
 */
const findAdjacentNodes = (node) => {
  // loop through edges array
  // which each loop, ask, is my node in the conection
  // if yes, psh the other node in pair, into adjacentNodes array
  // if no, keep looping

  const adjacentNodes = [];

  for(let edge of edges) {
    //   edge = ['A', 'B']
    const nodeIndex = edge.indexOf(node);

    if(nodeIndex > -1) {
        adjacentNode = nodeIndex === 0 ? edge[1] : edge[0]; //there will always be array of two with index 0,1
        adjacentNodes.push(adjacentNode);
    }
  }

  return adjacentNodes;
};
console.log(findAdjacentNodes('C'))

/**
 * Find connected nodes
 */

const isConnected = (node1, node2) => {

    return edges.some((edge) => {
        // console.log({edge})
        return edge.indexOf(node1) > -1 && edge.indexOf(node2) > -1
    })
}
console.log(isConnected('A', 'C'));