/**
 * String Challenge
Have the function StringChallenge(str) take the str parameter being passed and return the smallest number you can get through the following reduction method. The method is: Only the letters a, b, and c will be given in str and you must take two different adjacent characters and replace it with the third. For example "ac" can be replaced with "b" but "aa" cannot be replaced with anything. This method is done repeatedly until the string cannot be further reduced, and the length of the resulting string is to be outputted.

For example: if str is "cab", then "ca" can be reduced to "b" and you get "bb" (you can also reduce it to "cc"). The reduction is done so the output should be 2. If str is "bcab", "bc" reduces to "a", so you have "aab", then "ab" reduces to "c", and the final string "ac" is reduced to "b" so the output should be 1.
Examples
Input: "abcabc"
Output: 2
Input: "cccc"
Output: 4
 */

function StringChallenge(str) { 

    // code goes here  
    var n = str.length;
  var count =  Array.from({length: 3}, (_,i) => 0); 
  
    for(var i = 0; i < n; ++i) {
      count[str.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
  
    // if we have same occurence all over return n
    if(count[0] ===n || count[1] === n || count[2] === n) {
      return n;
    }
    if((count[0] % 2) === (count[1] % 2) && (count[1] % 2) === (count[2] % 2)) {
      return 2;
    }
  
    return 1; 
  
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));