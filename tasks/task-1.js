/**
 *
 * Write an algorithm that takes an array of numbers as input and
 * calculates the sum of those numbers
 *
 * Define the Time Complexity of that algorithm and determine
 * what the lowest possible Time Complexity is for this problem
 */

function sumNumbers(input) {
  let result = 0;
  for (var i = 0; i < input.length; i++) {
    result += input[i];
  }
  return result;
}

console.log(sumNumbers([1, 3, 10]));
// T = O(n)  Linear Time Complexity