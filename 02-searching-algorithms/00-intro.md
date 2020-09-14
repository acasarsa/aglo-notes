# 00-Intro

Objectives: 

* Describe what a searching algo is
* implement a linear search on arrays
* implement binary search on sorted arrays
* implement a naive string searching algo 
* implement the KMP string searching algo

**Example:  Create an address**

**--Simple way--**

* given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want. 
* this is **linear search**
* js does this with lots of methods like 
  * .find 
  * .indexOf 
  * .includes
  * .findIndex

Linear Search

* function accepts an array and a value \(numbers and another number\)
* loop through the array and check if the current array element is equal to the value 
* if it is found, return the index at which the element is found
* if the value is never found, return -1



