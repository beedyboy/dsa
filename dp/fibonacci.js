/**
 *
 * @param {*} n
 * @param {*} memo
 * @returns
 *
 * @description
 *
 * Every item is stored in the memory, which allows us to reduce number of calls
 * when we already done that in the past.
 * We Build it up "from the bottom" following the Bottom-Up approach
 */

function fib(n, memo) {
  let result;
  if (memo[n]) {
    return memo[n];
  }
  if (n == 0 || n == 1) {
    result = 1;
  } else {
    result = fib(n - 1, memo) + fib(n - 2, memo);
  }
  memo[n] = result;
  return result;
}

console.log(fib(4, {}))
console.log(fib(5, {}))

/** Complexity
 * 
 * We now have Linear Time Complexity
 */