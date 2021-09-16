/**
 * You got a list of items, where every item has a value and a weight
 * You got a bag that holds a maximum weight of X.
 *
 * Write a program that maximizes the value of the items you put
 * into the bag whilst ensuring that you don't exceed the maximum weight
 */

function knapsackFn(items, cap, itemIndex, memo) {
  console.log("RUNNING");
  console.log({ memo });
  if (memo[cap][itemIndex]) {
    return memo[cap][itemIndex];
  }
  if (cap === 0 || itemIndex < 0) {
    return { items: [], value: 0, weight: 0 };
  }
  if (cap < items[itemIndex].weight) {
    return knapsackFn(items, cap, itemIndex - 1, memo);
  }
  const sackWithItem = knapsackFn(items, cap - items[itemIndex].weight, itemIndex - 1, memo);
  const sackWithoutItem = knapsackFn(items, cap, itemIndex - 1, memo);

  const valueWithItem = sackWithItem.value + items[itemIndex].value;
  const valueWithoutItem = sackWithoutItem.value;
  let resultSack;
  if (valueWithItem > valueWithoutItem) {
    const updatedSack = {
      items: sackWithItem.items.concat(items, items[itemIndex]),
      value: sackWithItem.value + items[itemIndex].value,
      weight: sackWithItem.weight + items[itemIndex].weight,
    };
    resultSack = updatedSack;
  } else {
    resultSack = sackWithoutItem;
  }
  memo[cap][itemIndex] = resultSack;
  return resultSack;
}

function knapsack(items, cap, index) {
  const mem = Array.from(Array(cap + 1), () =>
    Array(items.length).fill(undefined)
  );
  return knapsackFn(items, cap, index, mem);
}
const items = [
  { name: "a", value: 10, weight: 3 },
  { id: "b", value: 6, weight: 8 },
  { name: "c", value: 3, weight: 3 },
  { name: "d", value: 2, weight: 3 },
];
maxWeight = 8;
const sack = knapsack(items, maxWeight, items.length - 1);
console.log(sack);
