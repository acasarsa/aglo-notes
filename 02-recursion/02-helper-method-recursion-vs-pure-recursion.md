# 02-helper-method-recursion-vs-pure-recursion

### examples:

```javascript
// collect all the odd values in an array

function collectOddValues( arr ) {
  let result = []

  function helper( helperInput ) {
    if( helperInput.length === 0){
      return 
    }

    if ( helperInput[0] % 2 !== 0 ){
      result.push( helperInput[0] )
    } else { console.log('not odd, moving on')}
    //////////
      console.log('result', result)
      console.log('pass remaining array to helper as new input', helperInput.slice(1))
    ///////////
    helper( helperInput.slice(1) )
  }

  console.log('pass arr to helper')
  
  helper(arr)
  return result

}

collectOddValues([1,2,3,17])
/// 
/// pass in the arr to helper at the bottom 
/// process of recursion is starts
/// when we call helper( helperInput.slice(1) ) 
/// this takes a slice of the input passed to helper (ie arr) from index 1
/// thus removing the already tested element from the arrayinput
//// until everything is tested and the helperInput array is empty
```

{% embed url="https://repl.it/@AndrewCasarsa/helper-method" %}

pure recursion: 

```javascript
function collectOddValues(arr){
  let newArr = []

  if(arr.length === 0){
    return newArr;
  }

  if(arr[0] % 2 !== 0){
    newArr.push(arr[0]);
  }

  newArr = newArr.concat( collectOddValues( arr.slice(1))) ;
  return newArr;
}

collectOddValues([1,2,3])

// this one will make several levels of concats on newArr
// once array is empty all the concats 
// will run and they will combine 
// into the desired newArr

// first time through:
// newArr = [1]
// [1].concat( collectOddValues( [2,3]))
// [].concat( collectOddValues( [3]))
// [3].concat( collectOddValues([]))
// [3]
// [3]
// [1, 3]
```

[https://repl.it/@AndrewCasarsa/pure-recursion](https://repl.it/@AndrewCasarsa/pure-recursion)

