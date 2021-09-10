/**
 * Primality Test
 * 
 * Determine whether an input is a prime number
 * 
 * isPrime(9); //false
 * isPrime(5); //true
 * 
 * 
 * Algorithm needs to do one thing:
 * 
 * 1) Try dividing the number by all smaller numbers and 
 * return true if it's only divisible by itself and 1
 */

 function isPrime(number) {
    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(5));
console.log(isPrime(9));

// Best Case: number = 1 OR number = 2 => O(1)
// Average Case: O(n)
// Worst Case: number = 27277 => O(n)


/**
 * 
 * Every number that's NOT a prime has a producr that consists of two
 * factors a & b that are both neither 1 nor the number itself
 * 9 = 3 * 3
 * 
 * Also,
 * At least one factor is smaller or equal to the square root of the number
 * sqrt(9) = 3 => 9 = 3 * 3 both factors are equal to the square root
 */


 function isPrimeImproved(number) {
    for(let i = 2; i < Math.sqrt(number); i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}
// Best Case: number = 1 OR number = 2 => O(1)
// Average Case: O(n)
// Worst Case: number = 27277 => O(sqrt(n))
