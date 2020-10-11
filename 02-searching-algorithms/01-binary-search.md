# 01-Binary-Search

works by finding center of array and then center of that segment etc

* eliminate half of remaining elements at a time.
* ONLY WORKS ON SORTED arrays

pick half-way point. is item to find bigger or smaller than the one at half way point? 

then find middle of that segment. ask same question. repeat until you get the one you are looking for. 

* divide and conquer 

### **Implementation**

 pseudocode: 

* function accepts a sorted array and a value
* create a left pointer at the start of the array and a right pointer at end of array. 
  * make 2 variables one to point to index that we start at \(0\) and a right-side vairable that is at the end of the array. arr.length-1
* while middle !== n loop
  * check if avg between R and L is greater than or less than num. 
  * return if index 
  * if value is too small move the left pointer up 
  * if value is too big move the right pointer down. 
* if you never find value, return -1
* reassign left and right then pick new middle

### Big O of binary search

O\(log n\) - average case 

* this is great it's bascially constant O\(1\)

```javascript
function binarySearch(arr, n) {
  // create 2 pointers one at index and one at end of array
  let start = 0
  let end = arr.length-1
  let mid = Math.floor((end + start) / 2)
  // set up a middle wtih a Math.floor to round down
  
  while(arr[mid] !== n && start <= end){
    // stay in loop while mid value is !== n && the start is <= end point. (this ends loop if n is not in array)
    if(n < arr[mid]){
      end = mid - 1
    } else {
      start = mid + 1
    }
    mid = Math.floor((end + start) / 2)
  } 
  console.log(start,mid,end)

  if(arr[mid] === n){
    return `n found at index: ${mid}`
  } else {
    return -1
  }

}

console.log(binarySearch([2,4,6,7,13,15,28,30,31], 66))
```

