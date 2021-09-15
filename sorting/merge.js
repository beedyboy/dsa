function sort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  if (arr.length === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }
  // get the middle index
  const middle = Math.floor(arr.length / 2);
  // Split the array into smaller chunks
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle); //by passing middle, it takes it to the end

  // sort the array but only if there are only two elements

  const leftSortedArray = sort(leftArray);
  const rightSortedArray = sort(rightArray);

  // merge the arrays together
  const mergedArr = [];
  let leftArrIndex = 0;
  let rightArrIndex = 0;
  while (
    leftArrIndex < leftSortedArray.length ||
    rightArrIndex < rightSortedArray.length
  ) {
    //   the smaller item needs to go first
    if (
      leftArrIndex >= leftSortedArray.length ||
      leftSortedArray[leftArrIndex] > rightSortedArray[rightArrIndex]
    ) {
      mergedArr.push(rightSortedArray[rightArrIndex]);
      rightArrIndex++;
    } else {
      mergedArr.push(leftSortedArray[leftArrIndex]);
      leftArrIndex++;
    }
  }
  return mergedArr;
}
const sortedArr = sort([-10, 33, 5, 10, 9, 3, -19, -99, 100]);
console.log(sortedArr);
