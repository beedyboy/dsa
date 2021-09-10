/**
 * 
 * 
 * Constant Time Complexity
 * -------------------------
 * The time it takes to execute a function is always the same in constant time
 * 
 * 0(1)
 *      **          
 *      **      
 *      **  
 *      *****************
 *      ******************
 * 
 * 
 * 
 * Logarithm Time Complexity
 * -------------------------
 * 0(log n)  
 * Execution time grows logarithmically with n
 * 
 * 
 * Linear Time Complexity 
 * -------------------------
 * 0(n)
 * 
 *      **          *
 *      **      *
 *      **  * 
 *      ***
 *      ******************
 * --------------------------
 *
 * 
 * Quadratic Time Complexity
 * -------------------------
 * 0(n2)  
 * Execution time grows quadractically with n
 * 
 * 
 * Cubic Time Complexity
 * -------------------------
 * 0(n3)
 * 
 * Exponential Time Complexity
 * -------------------------
 * 0(2*n) 
 * 
 *  
 * -------------------------
 * 
 * Asymptotic Analysis 
 * -------------------------
 * 
 * count the number of expression executions.
 * We are gonna assume that every expression take same number of time
 * 
 * i.e 
 * 
 *  
 function sumUp(n) {                                      n= 1      n= 3        n = 10    n = n
     let result = 0;   it executes exactly once             1           1           1       1

     for(let i = 1; i <= n; i++) { . executes once          1           1           1        1

        result += i;                 executes once          1           3           10       n
     }
     return result;                  executes once          1           1           1        1
 }

 the only dynamic time is the body in the loop

 so when n == n , 
 we have
 T= 1 + 1 + n + 1 = 3 + n 
 T = 3 + 1*n
 So we can say T = a*n + b

 The coefficient doesnot matter because it doesn't grow at all

 The fastest growing term is a*n 
 Therefore T = a * n
 Remove the coeffiecient, T = n 

 Therefore T = 0(n); Which is Linear time
 The execution time grows linearly with n - The bigger the n the longer it takes to execute
*
*
*Deriving Constant Time Complexity
* --------------------------------
 function sumUp(n) {             n= 1      n= 3        n = 10    n = n
     return (n/2) * (n + 1)         1          1        10          n
    
    }

    T = 1
    The expression runs once.

    Fastest growing term is 1 and it doesn't grow, and no coefficient to use,
    therefore T = 0(1).

    n(number of input) has no effect on the time the algorithm takes
    The time it takes constant time to execute does not depend on n at all
 *
 * 
 * * 
*/
