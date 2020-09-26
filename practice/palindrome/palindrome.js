function isNumPalindrome(n){
  // check if number is a palindrome 
  // if not add digits together 
  reversed = n.toString().split('').reverse().join('')
  
  if(n == reversed) return true 
  else return false

}
// console.log(isNumPalindrome(1212))

function palindromeCheck(n){
  if(n < 0) return false

  let str = n.toString()
  if(str.length === 1 ) return true
  if (isNumPalindrome(n)) return true
  
  while (!isNumPalindrome(n) || n.toString().length !== 1) {
    let sum = str.split('').reduce((total, current) => total + +current, 0)
    console.log(sum)
    if (palindromeCheck(sum)) return true
  } 
}

console.log(palindromeCheck(95999999999959))

function isNumPalindromeNoString(n){
  let arr = []
  if(n < 0) return false
  if(Math.ceil(Math.log10(n + 1)) === 1) return true

  

}