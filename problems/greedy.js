function knapsack(elements, capacity) {
  const sack = { items: [], value: 0, weight: 0 };
  let remainingCapacity = capacity;
  for (const el of elements) {
    if (el.weight <= remainingCapacity) {
      sack.items.push(el);
      sack.value += el.value;
      sack.weight += el.weight;
      remainingCapacity -= el.weight;
    }
  }
  return sack;
}

const items = [
  { name: "a", value: 10, weight: 3 },
  { id: "b", value: 6, weight: 8 },
  { name: "c", value: 3, weight: 3 },
  { name: "d", value: 2, weight: 3 },
];
maxWeight = 8;
const sack = knapsack(items, maxWeight);
console.log(sack);
