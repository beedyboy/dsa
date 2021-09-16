/**
 * 
 * Write an algorithm that return the least amount of coins
 * 
 * ********STEPS***************
 *  Verify input => Are the coins ordered and stable? Should we get an exact solution or round to have fewer coins
 *  Think about the problem => Try a greedy approach first: Go through all coins and decide for each if it should be used
 *  
*/
function computeChange(coins, amount) { 
let remainingAmount = amount; 
    const calculatedChange = { 
        selecetedCoins: {},
        numberOfCoins: 0
    }
    for (const coin of coins) {
        const count = Math.floor(remainingAmount / coin);
        calculatedChange[coin] = count;
        calculatedChange.numberOfCoins += count
        remainingAmount = remainingAmount - coin * count;
    }
    return calculatedChange;
}
const availableCoins = [100, 50, 20, 10, 5, 2, 1];
const targetamount = 50;
const change = computeChange(availableCoins, targetamount);
console.log(change);
