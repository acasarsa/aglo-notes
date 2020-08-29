---
description: useful when data set is an array or string
---

# 02-Sliding-Window-Pattern

* This patter involves creating a window which can either be an array or number from one position to another
* depending on a certain condition, the window either increases or closes \(and a new window is created\)
* very useful for keeping track of a subset of data in an array/string etc

### Example: 

* write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the max sum of n consecutive elements in the array. 
  * $$maxSubarraySum([4, 2, 1, 6], 1)  $$ // 6 
  * $$maxSubarraySum([4, 2, 1, 6], 2)   $$ // 1+ 6 = 7 

```javascript
// O(n)
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3], 4)
// as we move along the array we can subtract 
// the 1st number and add the new number as we move along. 
// that way we don't have to redo very much
```

{% embed url="https://repl.it/@AndrewCasarsa/sliding-window-pattern" %}





