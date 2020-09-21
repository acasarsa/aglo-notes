function binarySearch(arr, n) {
  // create 2 pointers one at index and one at end of array
  let start = 0
  let end = arr.length-1
  let mid = Math.floor((end + start) / 2)
  
  while(arr[mid] !== n && start <= end){
    
    if(n < arr[mid]){
      end = mid - 1
    } else {
      start = mid + 1
    }
    mid = Math.floor((end + start) / 2)
  } 
  console.log(start,mid,end)

  if(arr[mid] === n){
    return `n found at index: ${mid}`
  } else {
    return -1
  }

}

console.log(binarySearch([2,4,6,7,13,15,28,30,31], 66))


