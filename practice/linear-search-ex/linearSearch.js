
function linearSearch(arr, n) {
  // iterate through each value in array 
  for (let i = 0; i < arr.length; i++ ) {
    // check if the current element is equal to n 
    if ( arr[i] === n ){
      console.log('index is', i)
      // if it does return the index
      return i
    } 
  }
  // if after the loop has completed we still can't find n then return -1
  return -1
}

let arr = [10,15,20,25,30]
let n = 30
console.log(`response: ${linearSearch(arr, n)}`)
console.log('indexOf', arr.indexOf(30))




