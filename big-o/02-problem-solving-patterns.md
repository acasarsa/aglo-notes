# 02-Problem Solving Patterns

### Frequency Counters

* This pattern uses objects or sets to collect values/frequences of values
* This can often avoid the need for nested loops or O\(N^2\) operations with arrays / strings
  * useful when you have multiple inputs and you need to compare them and see if they consist of 
  * useful when comparing 2+ inputs or frequency of certain things occurring
  * usually O\(n\) rather than O\(n^2\) 
    * similar values
    * anagrams of one another
    * if a value is contained inside another value any time you compare

**Example**

* write a fnx called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same. 
  * `same([1,2,3], [4,1,9]) // true`
  * `same([1,2,3], [1,9]) // false`
  * `same([1,2,1], [4,4,1]) // false (must be same frequency)`
* using nested loops is naive solution - TC =&gt; n^2 --- \(very slow!\)

```javascript
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    let freqCounter1 = {}
    let freqCounter2 = {}
    
    for ( let val of arr1 ) { 
        freqCounter1[val] = (freqCounter2[val] || 0 ) + 1 
    }
    
    for ( let val of arr2 ) {
        freqCounter2[val] = (freqCounter2[val] || 0 ) + 1
    }
    
    for ( let key in freqCounter1 ) { 
        if (!(key ** 2 in freqCounter2)) { 
            return false
        }
        if (freqCounter2[key ** 2] !== freqCounter1[key]) { 
            return false
        }
    }
    return true
}
```

TC =&gt; O\(n\) - much faster 

{% embed url="https://repl.it/@AndrewCasarsa/Problem-Solving-Patterns" %}





