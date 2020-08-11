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







