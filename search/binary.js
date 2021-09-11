function findElement(sortedArr, element) {
  let startIndex = 0;
  let endIndex = sortedArr.length - 1;

  while (startIndex <= endIndex) {
    // find the middle value
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (element === sortedArr[middleIndex]) {
      return middleIndex;
    }
    if(sortedArr[middleIndex < element]) {
        startIndex = middleIndex + 1;
    } else {
        endIndex = middleIndex - 1;
    }
  }
}

const arr = [1, 5, 9, 13, 99, 100];

console.log(findElement(arr, 99));

/** ****
 * Our example middle index is 2, which is 9
 * Now it compares 99 and 9, 9 is less than 99,
 * so we change our startIndex to be higher by one
 */