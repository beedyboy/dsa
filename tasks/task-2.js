/**
 * Write two algorithms:
 * 1) The first algorithm should take an array of numbers as input and 
 * return the minimum value in the array (i.e the smallest number)
 * 
 * 2) The second(independent) algorithm should take a number as input and
 *  return "true" if it's an even number, "false" for odd numbers
 * 
 * Also define the time complexities and possible cases for both algorithms
 */

 function smallest(numbers) {
    let min = numbers[0]; //1
    for(var i =0;  i < numbers.length; i++) {  //1
        if(numbers[i] < min) { //n
            min = numbers[i]; //n
        }
    }
    return min; //1
    }
    
    console.log(smallest([6,9,4, 3, 2, 3,7]));

    function evenOdd(number) {
        if(number % 2 === 0) { // 1
            return true;
        } else {
            return false
        }
    }
    console.log('30 is: ', evenOdd(30));
    console.log('15 is: ', evenOdd(15));

    /**
     * smallest
     * T = 1 + 1 + 1 + n + n = 3 + 2n
     * T = O(n) Linear Time complexity
     * 
     * Best Case: if our first iniatialization is
     *  the smallest: [1, 2, 3]=> O(n)
     * 
     * 
     * Worst Case : [3, 2, 1]:=> O(n)
     * 
     * Average Case: [2,1,3] => O(n)
    


     * evenOdd is T = O(1) Constant Time Complexity
     */