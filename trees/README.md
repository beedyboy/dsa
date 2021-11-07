# What is a tree?
- A collection of nodes and edges where:
1. There is one root
2. There is only one unique path between any two nodes


```
Nodes without children are called leaf nodes
```
>>The height of a tree is the largest level

#
## Binary Tree 
```
A tree where each node has at most two children
```
```
            a
           /  \
           b   c
           /\   \
           d e   f
```
#  Breadth-First Tranversal
 Breadth-First Tranversal is a way we can access every node/value of a binary tree.
 It uses a queue algorithm.

 # Depth-First Tranversal
 - It is the opposite of BFT
 
 ## Pre-Order Tranversal
 - its called pre-order because you print out the parent before the children
>> self, left, right

## Post Order Tranversal 
it prints out the children before itself
>> left, right, self

## InOrder Tranversal
- It prints out self in between its children
>> left, self, right