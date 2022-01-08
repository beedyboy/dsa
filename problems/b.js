const bitmapHoles = (strArr) => {
    const twoDimensionMatrix = construct2DMatrix(strArr);
  
    return countBitmapHoles(twoDimensionMatrix);
  };
  
  const countBitmapHoles = (twoDimensionMatrix) =>
    twoDimensionMatrix.reduce((result, connectedGroup) => {
      result += numberOfBitmapHolesInConnectedGroup(connectedGroup);
  
      return result;
    }, 0);
  
  const construct2DMatrix = (strArr) => {
    const columnMatrix = strArr[0]
      .split("")
      .map((_, index) => strArr.map((row) => row.charAt(index)).join(""));
  
    return [...strArr, ...columnMatrix];
  };
  const numberOfBitmapHolesInConnectedGroup = (connectedGroup) => {
    return (connectedGroup.match(new RegExp("(0)\\1+", "g")) || []).length;
  };
//   document.getElementById("example1").innerHTML =
//     '["10111", "10101", "11101", "11111"] => ' +
//     bitmapHoles(["10111", "10101", "11101", "11111"]);
  
//   document.getElementById("example2").innerHTML =
//     '["1011", "0010"] => ' + bitmapHoles(["1011", "0010"]);
  
//   document.getElementById("example3").innerHTML =
//     '["110", "000", "111"] => ' + bitmapHoles(["110", "000", "111"]);
  
//   document.getElementById("example4").innerHTML = '["01111", "01101", "00011", "11110"] => ' +
//     bitmapHoles(["01111", "01101", "00011", "11110"]);

// console.log(bitmapHoles(["01111", "01101", "00011", "11110"]));
// console.log(bitmapHoles(["110", "000", "111"]));
// console.log(bitmapHoles(["1100", "0010", "1101"]));
console.log(bitmapHoles(["10111", "10101", "11101", "11111"]));


console.log(
    '["10111", "10101", "11101", "11111"] =>',
    bitmapHoles(["10111", "10101", "11101", "11111"])
  );
  
  console.log('"1011", "0010"] =>', bitmapHoles(["1011", "0010"]));
  console.log('["110", "000", "111"] =>', bitmapHoles(["110", "000", "111"]));
  
 