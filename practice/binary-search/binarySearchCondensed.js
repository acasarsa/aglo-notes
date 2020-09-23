function binarySearch(arr, n) {
  let start = 0
  let end = arr.length-1
  let mid = Math.floor((end + start) / 2)
  
  while(arr[mid] !== n && start <= end){
    if(n < arr[mid]) end = mid - 1
    else start = mid + 1
    mid = Math.floor((end + start) / 2)
  } 
  return arr[mid] === n ? `n found at index: ${mid}` : -1
}

console.log(binarySearch([2,4,6,7,13,15,28,30,31], 13))


