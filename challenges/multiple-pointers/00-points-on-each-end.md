# 00-Points-On-Each-End

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

