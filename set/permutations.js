/** ***
 * Permutation ia an ordered combination of values with or without repetition
 *
 * Without Repetition
 * Example: Todo list items
 * ['Walk dog', 'Clean toilet', 'Order food']
 *
 *
 * With Repetition
 * Example: Safe combination you want to set
 * [1,5,9]
 */

// without-permutation
/**
 *
 *  Main function call => A  B   C   D
 *  Recursive Step     =>    B   C   D
 *  Recursive Step     =>        C   D
 *  Recursive Step     =>            D
 */
function getPermutations(options) {
  const permutations = [];
  if (options.length === 1) {
    return [options];
  }

  const partialPermutations = getPermutations(options.slice(1));
  const firstOption = options[0];

  for (let i = 0; i < partialPermutations.length; i++) {
    const partialPermutation = partialPermutations[i];
    for (let j = 0; j <= partialPermutation.length; j++) {
      const permutationInFront = partialPermutation.slice(0, j);
      const permutationAfter = partialPermutation.slice(j);
      permutations.push(
        permutationInFront.concat([firstOption], permutationAfter)
      );
    }
  }

  return permutations;
}

const todoListItems = [
  "Walk the dog",
  "Clean the toilet",
  "Order food",
  "buy groceries",
];

console.log(getPermutations(todoListItems));

/** ****
 *
 * Time Complexity: O(n!) => Factorial Time Complexity
 */

//PERMUTATION WITH REPETITION
/**
 * * Can be used for password generation
 * **
 */

function getWPermutations(options, length) {
  const permutations = [];
  if (length === 1) {
    return options.map((option) => [option]);
  }
  const partialPermutations = getWPermutations(options, length - 1);
for (const option of options) {
  for (const existingPermutation of partialPermutations) {
    permutations.push([option].concat(existingPermutation));
    
  }
}
  return permutations;
}
const digits = [1, 2, 3];
const resultLength = 3;

console.log(getWPermutations(digits, resultLength));
// TIme Complexity: O(n^r) => n is the number of options, r is the length of the combination
// 3^3 is 27