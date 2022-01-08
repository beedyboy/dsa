# Graphs
## What are they?
- A data structure with nodes or vertices and edges or the connections between nodes
- Typically, a visualization of a graph will be of nodes represented by circles and edges as lines between the circles.

## Tree 
```
Trees are just a special kind of graph with one root and only one unique path between any two Nodes.

A graph can go beyond that and have as many number of root elements and multiple paths between nodes
```

### How can we represent a graph in code ?
> Vertex list + Edge list
#
        A----------B
        |         /
        |      C
        |    /  \
        |   /    \
        D---------E

```
    const vertices = ['A', 'B', 'C', 'D', 'E']
    const edges = [
        ['A', 'B'],
        ['A', 'D'],
        ['B', 'C'],
        ['C', 'D'],
        ['C', 'E'],
        ['D', 'E'],
    ]
```

> Adjacency Matrix
- A 2-D array filled out with 1's and 0's where each array represents a node and each index in the subarray, represents a potential connection to another node
- The value at adjacencyMatrix[node1][node2] indicates where there is a connection between node1 and node2
#
>       A----------B
        |         /
        |      C
        |    /  \
        |   /    \
        D---------E
#  

```
    const vertices = ['A', 'B', 'C', 'D', 'E']
    const edges = [
         A  B  C  D  E
    A   [0, 1, 0, 1, 0], 
    B   [1, 0, 1, 0, 0], 
    C   [0, 1, 0, 1, 1], 
    D   [1, 0, 1, 0, 1], 
    E   [0, 0, 1, 1, 0]
    ]
```

> Adjacency List 
- Stores a list of vertices 
- For every node, store a list of what nodes it's connected to
- Time complexity to find adjacent nodes -> O(1)

```
const vertices = ['a', 'b', 'c', 'd', 'e']
const adjacency_list = [
    ['b', 'd'],
    ['a', 'c'],
    ['b', 'd', 'e'],
    ['a', 'c', 'e'],
    ['c', 'd']
]

````
#
# Graph Terminology
We have two type
## Directed Graph
> in an Undeirected Graph, when there is a connection between nodes, it goes both ways.
e.g. 
- Facebook and its users and the relationship between the users can be modeled as an Undirected graph.
- Users are nodes and friendships between the users are edges
- There may be many ways two users are connected on Facebook

## Directed Graph
> In a Directed Graph, connections between nodes have direction.
- The internet can be modeled as a directed graph, where individual web pages are nodes and links between the pages are directed edges
- Links are directed - just because one page links to another, doesn't mean that page links back in return
- the degree of a node is the number of edges connected to the node.
- in a directed graph, nodes have an indegree or edges pointing to it and an outdegreee or edges pointing from it.


## Weighted vs Unweighted Graphs
- A Weighted Graph is a graph in Which the edges have values corresponding to weights
- An intercity road network could be an example of a weighted graph, where each city is a node and each road is an edge, labeled with their lengths.
- An Unweighted Graph has no weights to its edges, so every edge is the same as any other edge

## Cyclic vs Acyclic Graphs
- In a Cyclic Graph, there us at least one cycle, meaning that there is a path from at least one node back to itself
- An Acyclic Graph, means the graph contains no cycles aka no node can be traversed back to itself.
- Both of these graphs can be directed or Undirected. Directed Acyclic Graphs (DAG's) have special applications in computer science and can often be used to represebt any complex data processing flows


## Dense Vs Sparse Graphs
- Dense Graph - close to the maximum number of edges
- Sparse Graph - the number of edges is close to the number of nodes in the graph

#
#
### Other types
- Self-loop - when an edge has just one vertex(like a web page linking to itself)
- Multi-edge graphs - there are multiple edges between two vertices
- Simple Graph - A graph with no self-loops and no multi-edges

- in a simple directed graph, the maximum number of edges will be equal to n ^(n-1) where n is the number of nodes
- In a simple Undirected graph, the maximum number of edges is n ^(n-1)/2 - becuase there are no directions, there can only be one edge between two nodes