---
description: useful when data set is an array or string
---

# 02-Sliding-Wind

* This patter involves creating a window which can either be an array or number from one position to another
* depending on a certain condition, the window either increases or closes \(and a new window is created\)
* very useful for keeping track of a subset of data in an array/string etc

### Example: 

* write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the max sum of n consecutive elements in the array. 
  * $$maxSubarraySum([4, 2, 1, 6], 1)  $$ // 6 
  * $$maxSubarraySum([4, 2, 1, 6], 2)   $$ // 1+ 6 = 7 



