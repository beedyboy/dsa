/**
 * 
 * Searching Challenge
 * Have the function SearchingChallenge(strArr) take the array of strings stored in strArr, 
 * which will be a 2D matrix of 0 and 1's, and determine how many holes, or contiguous regions of 0's,
 *  exist in the matrix. A contiguous region is one where there is a connected group of 0's 
 * going in one or more of four directions: up, down, left, or right. 
 * 
 * For example: 
 * if strArr is ["10111", "10101", "11101", "11111"], then this looks like the following matrix:

1 0 1 1 1
1 0 1 0 1
1 1 1 0 1
1 1 1 1 1

For the input above, your program should return 2 because there are two 
separate contiguous regions of 0's, which create "holes" in the matrix. 
You can assume the input will not be empty.
Examples
Input: ["01111", "01101", "00011", "11110"]
Output: 3
Input: ["1011", "0010"]
Output: 2

// Input:"01111", "01101", "00011", "11110"
// Output:3

// Input:"1011", "0010"
// Output:2

. For input ["10111", "10101", "11101", "11111"] the output was incorrect. The correct output is 2

2. For input ["01110"] the output was incorrect. The correct output is 2

3. For input ["110", "000", "111"] the output was incorrect. The correct output is 1

4. For input ["110", "001", "110"] the output was incorrect. The correct output is 3

5. For input ["1100", "0010", "1101"] the output was incorrect. The correct output is 3
*/

function bitmapHoles(strArr) {
  let returnArry = [];
  let indexOfZ = [];
  let subarr;
  for (let i = 0; i < strArr.length; i++) {
    subarr = strArr[i].split("");
    // console.log({subarr})
    let index = [];
    for (let y = 0; y < subarr.length; y++) {
      if (subarr[y] == 0) index.push(y);
      if (y == subarr.length - 1) indexOfZ.push(index);
    }
  }
  console.log({ indexOfZ });
  for (let i = 0; i < indexOfZ.length; i++) {
    for (let j = 0; j < indexOfZ[i].length; j++) {
      if (
        indexOfZ[i + 1] &&
        (indexOfZ[i][j] == indexOfZ[i + 1][j] ||
          indexOfZ[i + 1].indexOf(indexOfZ[i][j]))
      )
        returnArry.indexOf(strArr[i]) < 0 ? returnArry.push(strArr[i]) : false;
      if (Math.abs(indexOfZ[i][j] - indexOfZ[i][j + 1]) == 1)
        returnArry.indexOf(strArr[i]) < 0 ? returnArry.push(strArr[i]) : false;
    }
  }

  return returnArry.length;
}
//  if 0,0 == 1,0 || 1 => 0, 0

// keep this function call here
console.log(
  '["10111", "10101", "11101", "11111"] =>',
  bitmapHoles(["10111", "10101", "11101", "11111"])
);

console.log('"1011", "0010"] =>', bitmapHoles(["1011", "0010"]));
console.log('["110", "000", "111"] =>', bitmapHoles(["110", "000", "111"]));
// console.log(
//   '["01111", "01101", "00011", "11110"] =>',
//   bitmapHoles(["01111", "01101", "00011", "11110"])
// );
["01111", "01101", "00011", "11110"];