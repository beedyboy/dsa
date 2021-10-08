/*****
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 *  An anagram is a word,d, phrase, or name formed by rearranging the letters of another,
 *  such as cinema, formed from iceman.
 * 
 * validAnagram('','') //true
 * validAnagram('aaz','zza') //false
 * validAnagram('anagram','nagaram') //true
 * validAnagram('awesome','awesom') //false
 */


function validAnagram(first, second) {
    if(first.length !== second.length) {
        return false;
    }

    const lookup= {};

    for(let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[first] ? lookup[first] +=1: lookup[first] = 1;
    }
    for(let i = 0; i < first.length; i++) {
        let letter = second[i];
      if(!lookup[letter]) {
          return false;
      } else {
          lookup[letter] -=1;
      }
    }
    return true;
}

validAnagram('anagram','nagaram');