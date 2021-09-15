function cartProduct(setA, setB) {
  // You shoud check if the sets are empty
  const product = [];
  for (let setAEL of setA) {
      if(!Array.isArray(setAEL)) {
          setAEL = [setAEL]; //overrides it by turning it to an array
      }
    for (const setBEL of setB) {
      product.push([...setAEL, setBEL]);
    }
  }
  return product;
}
function cartesian(...sets) {
  // ...sets turns to array of values
  let tempProduct = sets[0];
  for (let i = 1; i < sets.length; i++) {
    tempProduct = cartProduct(tempProduct, sets[i]);
  }
  return tempProduct;
}

const colors = ["blue", "red"];
const sizes = ["s", "m", "l", "xl"];
const styles = ["round neck", "v neck"];
console.log(cartesian(colors, sizes, styles));
/*****
 * Time Complexity:   O(n^x) 
 * x is the length of the set 
 * 
 * 
 * 
 * Space Complexity: O(n*m) => O(n^2)
 *  Because we create one new value which is stored permanently
 
 */