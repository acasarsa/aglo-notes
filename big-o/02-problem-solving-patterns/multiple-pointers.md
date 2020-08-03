# 01-Multiple Pointers

* creating pointers or values that correspond to an index or position and move towards the beginning, end or towards each other in middle based on a certain condition 
* very efficient for solving problems with minimal space complexity 
* you have an array or a string and you use two variables such as i or j

## Pointers on Each End

### Example

* Write a function called sumZero which accepts a **sorted** array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist. 

```javascript
// naive approach with O(n^2)
function sumZeroNaive(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if(arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}

let arr = [-4,-3,-2,-1,0,2,5,8,20]
sumZeroNaive(arr)
// console.log(arr[arr.length - 1])
// this is slow even with just a small array
// set a pointer at the 0 index and the last index and move them both towards each other. 
// add 1 to start and subtract 1 from end

function sumZero(arr) {
let left = 0;
let right = arr.length - 1;
  while(left < right){
    let sum = arr[left] + arr[right];
    if(sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0){
      right--
      console.log('moving left from right')
    } else {
      left++
      console.log('moving right from left')
    }
  }
    return 'undefined'
}
sumZero(arr)

// time complexity - O(N)
// space complexity for both is O(1)
```

{% embed url="https://repl.it/@AndrewCasarsa/Multiple-Pointers" %}

## Pointers On Same Side

### Example:

* implement function called **countUniqueValues**, which accepts a _sorted array,_ and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted. 
  * countUniqueValues\(\[1,1,1,1,1,2\]\) // 2 
  * countUniqueValues\(\[1,2,3,4,4,4,7,7,12,12,12,13\]\) // 7 
  * time complexity - O\(n\) / space complexity - O\(n\)

```javascript
let arr = [1, 1, 2, 6, 7, 8,99]
function countUniqueValues(arr){
  if (arr.length === 0) return 0
  var i = 0;
  for (var j = 1; j < arr.length; j++){
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
  }
  return i + 1
}

countUniqueValues(arr)
// time complexity - O(n)
// space complexity - O(n)

// i stays where it is while j moves to each element
// i = first element of array 
// j = second element of array
// check if i == j then j moves up and i does nothing
// if arr[i] !== arr[j] then i += 1 and arr[i] = arr[j].
```

{% embed url="https://repl.it/@AndrewCasarsa/Unique-Pointers" %}







