
function fib(n) {
    if(n == 0 || n == 1) {
        return 1;
    }
    return fib(n-1) + fib(n - 2)
}
console.log(fib(4));
console.log(fib(5)); 

/**
 * 
 *  Exponential Time Complexity O(2^n)
 * 
 * this is because we introduced 2 function calls for every execution
 * 
 */