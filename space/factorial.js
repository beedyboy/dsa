/**
 * Loop based
 * @param {*} number 
 * @returns 
 */
function fact(number) {
    let result = 1;
    for(let i = 2; i <= number; i++) {
        result = result * i;
    }
    return result;
}

//  Space Complexity: O(1)

// number, result are the only values stored in memory.
// the i variable is disposed after the loop

//  We operate on one and the same number, no new ("permanent") value is created


/*****
 * Recursion based
 */

function factRecursive(number) {
    if(number === 1) {
        return 1;
    }
    return number * factRecursive(number -1);
}
/**
 with every nested function call, we create a new value that has to be stored (the parameter received)
 * Because the function is not done with the data yet.
 Therefore we have 
 Space Complexity of: O(n) 
 */
