# Space Complexity

### Not just Runtime Complexity

> Time allows us to judge how long an algorithm will take and more importantly, how that runtime that time algorithm takes rolls with bigger input values (n).
>
> > Space complexity is the same for space
> > We judge space in memory how much algorithm occupies.

```
All values in Javascript are stored in memory.
Especially arrays and objects can take up a bit more space
```

Generally, in Javascript, you won't need to worry about space complexity and memory too much though

## Deriving Space Conplexity

1. Find places where data (values) is stored "permanently" in your algorithm
2. Count how often such "permanently" stored values are being created (and kept around)
3. Determine how the number of values depends on your "n"
```
O(n), O(1) etc. exists for space complexity as well
```