/** ****
 * Factorial
 *
 * Algorithm needs to do one thing:
 * (1) Go through all smaller numbers and multiply them with
 * each other (and with the input number)
 *
 * fact(3); 3 * 2 * 1 = 6
 */

function fact(number) {
  let result = 1;
  for (let i = 2; i < number; i++) {
    result = result * i;
  }
  return result;
}

console.log(fact(4));
console.log(fact(5));

function factorial(number) {
    if(number === 1) {
        return 1;
    }
   return number * factorial(number - 1)
  }
//   in every function call we have another function call
// which is n therefore we have T = O(n)

  console.log(factorial(5));