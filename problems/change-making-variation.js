/**
 *
 * Verify input => Are the coins ordered and stable? Should we get an exact solution or round to have fewer coins
 * Think about the push
 */
function computeChange(coins, amount) {
  let remainingAmount = amount;
  const calculatedChange = {
    selecetedCoins: {},
    numberOfCoins: 0,
  };
  for (const coin of coins) {
    const count = Math.floor(remainingAmount / coin);
    calculatedChange[coin] = count;
    calculatedChange.numberOfCoins += count;
    remainingAmount = remainingAmount - coin * count;
  }
  return calculatedChange;
}
function computeChangeBruteForce(coins, amount) {
  const results = [];
  for (let i = 0; i < coins.length; i++) {
    results.push(computeChange(coins.slice(i), amount));
  }
  let smallestAmountOfCoins = Number.MAX_SAFE_INTEGER;
  let finalResult;
  for (const result of results) {
    if (result.numberOfCoins < smallestAmountOfCoins) {
      smallestAmountOfCoins = result.numberOfCoins;
      finalResult = result;
    }
  }
  return finalResult;
}
const availableCoins = [8, 6, 5, 1];
const targetamount = 11;
const change = computeChangeBruteForce(availableCoins, targetamount);
console.log(change);

// Time Complexity: O(n * n) + O(n) => O(n^2) + O(n)
//  O(n^2)