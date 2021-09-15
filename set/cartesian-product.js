function cartProduct(setA, setB) {
  // You shoud check if the sets are empty
  const product = [];
  for (const setAEL of setA) {
    for (const setBEL of setB) {
      product.push([setAEL, setBEL]);
    }
  }
  return product;
}

const colors = ["blue", "red"];
const sizes = ["m", "l"];
console.log(cartProduct(colors, sizes));
/*****
 * Time Complexity: O(n*m) => O(n^2)
 * n is length of first set
 * m is the length of second set 
 * 
 * 
 * 
 * Space Complexity: O(n*m) => O(n^2)
 *  Because we create one new value which is stored permanently
 
 */
