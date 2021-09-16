# Solving Problems / Coming up with Algorithms

1. Verify the problem + the problem inputs E.g. is a an array of fixed length, does order matter etc.
2. Think about the problem + derive a verbal solution (= think loudly) i.e. Doesn't need to be the final or best possible solution! (Experience + practicing helps).
3. Write down a first version (e.g. in pseudo-code).
4. Verify if it catches all possible use cases (Try different inputs).
5. Derive time complexity and see if you can improve your solution to do better.
6. Explore alternative approaches

# Ways of Simplifying a Problem

1. Split into smaller sub-problems - Split arrays into chunks and possibly combine With Recursion
2. Use console.log() or breakpoints to verify what's in your (temporary) variables
3. Use helper variables (e.g. helper arrays to store intermediate results) => Don't worry about space complexity, don't aim for the shortest "no overhead" solution right from the start.

```

Finding good approaches to solve a problem takes practice - there is no simple "blueprint" that you can apply to every problem.

```

>> Practice by diving into common algorithms and interview questions

## Greedy Vs Dynamic

>> Greedy is the solution you write to make best possible decision in every step and hope tha it leads to the best overall solution.
>> They are faster to set up and come up with but they don't necessarily provide the best runtime and/or result

>> Dynamic algorithms evaluates all possible solutions and find overall best solution via comparison
>> It uses the divide and conquer approach: Divide the problem into smaller, easy-to-solve subproblems
