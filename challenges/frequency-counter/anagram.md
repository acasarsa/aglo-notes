# Anagram



![](../../.gitbook/assets/screenshot-2020-07-15-14.59.14%20%282%29.png)

```javascript
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    console.log("lengths don't match")
    return false
  }
  
  let charCounter1 = {}
  let charCounter2 = {}
  
  // use for of loop for each stray to create an object
          
  for (let el of str1) {
    charCounter1[el] = (charCounter1[el] || 0) + 1
    // key's value either equals its current value + 1 or it's initialized at 0 + 1
  }
  
  for (let el of str2) {
    charCounter2[el] = (charCounter2[el] || 0) + 1
  } 

  for (let key in charCounter1) {
    if (!(key in charCounter2)) {
      console.log("keys don't match")
      return false
    }

    if ( charCounter2[key] !== charCounter1[key] ) {
      console.log("letter count doesn't match even thought keys may match")
      return false
    }
  }

    console.log("it's an anagram")
    return true  
}

validAnagram("anded", "daned")
```

{% embed url="https://repl.it/@AndrewCasarsa/Anagram" %}

