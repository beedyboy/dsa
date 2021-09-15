# Sorting

Its about having an array of data unsorted.
With sorting we can now make it sorted either ascending or descending way

## Bubble Sorting

Compare two items at a time and sort them. Go through the entire array multiple times until
all pairs were compared and sorted

> > The time complexity

- Best Case:

```
The item are already sorted e.g. [1, 2, 3]
Then the loop executes only once, therefore we have Linear time O(n).
```

- Average Case:

```
Random order, we don't know where the item items
Then it tends to be O(n ^ 2)
```

- Worst Case:

```
The items are sorted in wrong order, therefore we have Quadratic time  O(n ^ 2)
```

## Quick Sorting

> use pivot elements to split array into smaller chunks - elements bigger, smaller, and equal than the pivot element. Repeat that process for all chunks and concat the sorted chunks.
>
> > The time complexity

- Best Case:

```
The item are sorted randomly (Not in right or wrong order)
O(n * logn)
```

- Average Case:

```
The item are sorted randomly (Not in right or wrong order)
O(n * logn)
```

- Worst Case:

```
The items are already sorted (order does not matter), therefore we have Quadratic time  O(n ^ 2)
```

## Merge Sort

> Split aaray multiples times until we have only 2-element arrays left - sort those arrays and merge them back together
>

> > The time complexity

- Best Case:

```
The item are sorted randomly (Not in right or wrong order)
O(n * logn)
```

- Average Case:

```
The item are sorted randomly (Not in right or wrong order)
O(n * logn)
```

- Worst Case:

```
The items are already sorted (order does not matter), therefore we have Quadratic time  O(n ^ 2)
```