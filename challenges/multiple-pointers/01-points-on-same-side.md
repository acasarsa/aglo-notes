# 01-Points-On-Same-Side

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

