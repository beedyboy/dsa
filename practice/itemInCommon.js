function itemInCommon(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
          if(arr1[i] === arr2[j])   return true; 
      }
        
    }
    return false
}
/** ******
 * We can use object to achieve a better result since the Big O of the first case will give us O(n^2)
 * 
 * 
 */
 function itemInCommonOp(arr1, arr2) {
     let obj = {};
     for (let i = 0; i < arr1.length; i++) {
         obj[arr1[i]] = true;
         
     }
     for (let j = 0; j < arr2.length; j++) {
         if(obj[arr2[j]]) return true
         
     }
     return false
 }
 let array1 = [1,3,5];
 let array2 = [2,4,5];

 console.log(itemInCommonOp(array1, array2));