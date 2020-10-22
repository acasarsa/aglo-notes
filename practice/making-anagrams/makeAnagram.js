function makeAnagram(a, b){
  // find minimum number of deletions to make two strings anagrams 
  // becomes anagram when there is same letters in same frequency
  // create seen object to increment letters seen in a and b. 
  // or go through a 
  // a = cde // b = dcfcd // cd 
  // going through a seen = { c: 1, d: 1, e: 1 }
  // seen = { c:3, d:3, f:1 } 
  // seenB = {c: 2, d:2, f:1}
  // seenA = {c:1, d: 1, e: 1}
  // seenB[el] - seenA[el]  // need to subtract from the larger string. so need to check that first
  // return 
  let arrA = a.split('')
  let arrB = b.split('')

  let long = arrA.length < arrB.length ? arrB : arrA
  let short = arrA.length < arrB.length ? arrA : arrB
  // need long and short for latter to subtract difference

  let shortObj = {}
  let longObj = {}
  // go through short array make key pairs 
  // then if key doesn't exist in long remove that key from shortObj. 
  // if key exists 

  let count = long.length + short.length

  for(const ch of short) {
    if (shortObj[ch]) shortObj[ch]++
    else shortObj[ch] = 1
  }

  for(const ch of long) {
    if (longObj[ch]) longObj[ch]++
    else longObj[ch] = 1
  }

  

  for(let key in longObj){
    if (key === shortObj[key] ){

    }
  }
  // shortObj = {c:1, d: 1, e: 1}
  // longObj = {c: 2, d:2, f:1}

  // if key exists in shortObj do nothing 
  // if key of longObj does not exist in short object decrement count
  // if key of longObj does exist in shortobj 
  // // let current = el of long 
  // // if current value of long is greater than value of short at key of current then do subtraction and decrement count by amount. 


  // go through 
}