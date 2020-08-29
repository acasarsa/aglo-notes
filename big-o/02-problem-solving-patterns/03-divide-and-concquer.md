---
description: will do this a-lot with binary search. useful for really long data sets
---

# 03-Divide-and-Conquer

* this patter involves dividing a data set into smaller chunks and then repeating a process with a subset of data
* this pattern can tremendously decrease time complexity 

### Example: 

* Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1 

```javascript
// binery search method 
// log(n) 
// log base 2 n actually but re say just log(n)
function search(array, val){
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if(array[middle] < val) {
      min = middle + 1;
    } 
    else if (array[middle] > val) {
      max = middle - 1;
    }
    else {
      return middle;
    }
  }
  return -1 
}

let arr = [1,2,4,5,6,7,8,19,23,24]
```

[https://repl.it/@AndrewCasarsa/divide-and-conquer-pattern](https://repl.it/@AndrewCasarsa/divide-and-conquer-pattern)



