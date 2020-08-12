# 02-helper-method-recursion

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



