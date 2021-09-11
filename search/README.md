## Search Algorithm
Programs that helps search things in an array of data

```  Linear Search
# [3, 10, -3, 48, 5, 33, 99]

# Lets say we are looking for 5
It works on ordered and unordered lists and checks all items until it finds the element you're searching

The time complexity can be grouped into three:
 * # Best Case: 
> The item we're looking for is the very first item in the list.
Then the loop executes only once, therefore we have constant time O(1)

* # Average Case: 
> Here we have no idea where the item is,then it tends to be O(n)

* # Worst Case: 
> The item we're looking for is the last item in the list, then we have a linear time T= O(n)
```
```
# Binary Search & The Master Theorem
>The Master Theorem. allows us to judge the performance of a recursion algorithm
>> ** Binary search **  doesn't work on unordered lists. You need to sort the list first!
You find the median and compare it to the element you're trying to find
If not, take the half of the list in which must be inside


 * # Best Case: 
> The item we're looking for is right in the middle of the list.
Then the loop executes only once, therefore we have constant time O(1)

* # Average Case: 
> We don't know where the item will be. It tends to be O(log n)

* # Worst Case: 
> The item we're looking for is at the beginning or end.  O(log n)
Because we split the array in half in every iteration
```