# 01-Binary-Search

works by finding center of array and then center of that segment etc

* eliminate half of remaining elements at a time.
* ONLY WORKS ON SORTED arrays

pick half-way point. is item to find bigger or smaller than the one at half way point? 

then find middle of that segement. ask same question. repeat until you get the one you are looking for. 

* divide and conquer 

### **Implementation**

 pseudocode: 

* function accepts a sorted array and a value
* create a left pointer at the start of the array and a right pointer at end of array. 
  * make 2 variables one to point to index that we start at \(0\) and a right-side vairable that is at the end of the array. arr.length-1
* while left pointer is &lt; right pointer loop
  * check if avg between R and L is greater than or less than num. 
  * return if index 
  * if value is too small move the left pointer up 
  * if value is too big move the right pointer down. 
* if you never find value, return -1
* reassign left and right then pick new middle



