/**
 * FIBONACCI    
 * ***********************
 * 
 * In Fibonacci, every other elemennt is the sum of its two preceding elements
 * 
 * starts with [1,1]
 */

/**
 * Popular Interview Question
 * 
 * Return the nth element of the Fibonacci sequence
 * [1,1,2,3,5,8,13,21,34,55,89,144]
 * e.g fib(4) yields 5
 * 
 * Algorithm needs to do two things:
 * 1) Calculate the sequence up to the element we're looking for
 * 2) Return that element
 */  
function fib(n) {
    let numbers = [1,1];
    for( var i = 2; i < n + 1; i++) {
        numbers.push(numbers[i - 2] + numbers[i -1]);
    }
    return numbers[n];
}
console.log(fib(4));
console.log(fib(5)); 

/**
 * 
 *   let numbers = [1,1]; executes once 1
 *   for( var i = 2; i < n + 1; i++) { executes once 1
 *     numbers.push(numbers[i - 2] + numbers[i -1]); executes once n - 1 cos one was added to the iteration
 *   return numbers[n]; executes once 1
 * 
 * T = 1 + 1 + 1 + n-1 = 3 + n - 1
 * Fastest growing value is numbers
 * T = O(n)
 * Linear Time Complexity
 * 
 */