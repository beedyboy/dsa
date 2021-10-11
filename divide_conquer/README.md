# Divide and Conquer

- This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
- This pattern can tremedously decrease time complexity.

# Helper Method recursion
-It uses two functions i.e Outer and Inner

# Pure Recursion Tips
- For arrays, use methods like slice, the spread operator, and concat that make copies of array so you do not mutate them
- Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
- To make copies of objects use Object.assign, or the spread operator