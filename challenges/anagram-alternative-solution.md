# Anagram alternative solution

```javascript
function isAnagram() {
  for (let i = 0; i < first.length; i++) {
    let letter = first[i]
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
  }

  console.log('lookup', lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i]
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
      // if letter has a count then subtracts from that count
    }
    
    return true
  }
}
```

{% embed url="https://repl.it/@AndrewCasarsa/Anagram-Alternative-Solution" %}



