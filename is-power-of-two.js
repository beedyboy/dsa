/** 
 * Determine whether an input number is a power of throw
 * Algorithm needs to do one thing:
 * (1) Divide  number and future division results by two, 
 * until 1 is reached and check if the remainder is always 0
 * 
 * isPowerOfTwo(8); //true
 * isPowerOfTwo(5); //falsee
 */

function isPowerOfTwo(number) {
    if(number < 1) {
        return false;
    }
    let dividedNumber = number;
    while (dividedNumber !== 1) {
        if(dividedNumber % 2 !== 0) {
            return false;
        }
        dividedNumber = dividedNumber / 2;
    }
    return true;
}
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(13));

/*******
 * Best Case: number = 13 => O(1)
 * Average Case: number = 13 => O(log n)
 * Worst Case: number = 1, 125, 899, 906, 842, 624 => O(log n)
 */

/** ****
 * IMPROVED VERSION
 * 
 * Using Bitwise Magic
 * 
 * A bitwise operation can be used to check if a number is power of two:
 * using the '&' operator
 * 
 number & (number - 1) === 0 // true. it's power of two
 *
 * Bitwise would compare the first digit of the two numbers
 * 
 */