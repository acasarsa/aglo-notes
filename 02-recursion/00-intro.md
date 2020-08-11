# 00-intro

* a way to write a problem. 
* you can write it non-recursively called iterative / iteratively or the recursive way

## Objectives

* define what recursion is and how it can be used
* understand the two essential components of a recursive function
* visualize the call stack to better debug and understand recursion functions
  * chrome dev tools
* use helper method recursion and pure recursion to solve more difficult problems

### Definition:

* a process that calls itself 
  * in our case process is a function 
* **How it works**: invoke same function with a different input until you reach your base case.
  * base case: where recursion ends

--

* recursion occurs in JSON.parse / .stringify
* document.getElementById and DOM traversal algorithms
* object traversal
* in more complex data structures
* can be a cleaner alternative to iteration

the call stack \(the behind the scenes order that says when to call which function\) - is a data structure

* any time a function is invoked it is placed \( pushed\) on the top of the call stack 
* when js sees the return keyword or when the function ends, the compiler will remove \(pop\)

### Examples:

countDown 

```javascript
function countDown(num){
  if(num <= 0){
    console.log("All done!")
    return
  }
  console.log(num)
  num--
  countDown(num)
}
countDown(3)

// print 3
// call countDown(2)
// print 2 
// call countDown(1)
// print 1
// call countDown(0) -- base case
// return !! (need this or it won't end)
// print "All done!"

// can do this through iteration too
// function countDownV2(num){
//   for(var i = num; i > 0; i--){
//     console.log(i)
//   }
//   console.log("All done!")
// }
// countDownV2(4)
```

{% embed url="https://repl.it/@AndrewCasarsa/countDown" %}

sumRange

```javascript
function sumRange(num){
  if(num === 1) return 1
  return num + sumRange(num-1)
}

sumRange(8)
// ...
// 5 + sumRange(4)
// 4 + sumRange(3)
// 3 + sumRange(2)
// 1 + sumRange(0)
// 4+3+2+1
// this does a sum of num through 1 

```

{% embed url="https://repl.it/@AndrewCasarsa/sumRange" %}





