function decodeWays(s){
  let alpha = /[a-zA-Z]/g
  let zeros = /^0*$/
  if (zeros.test(s)) return 0
  if (1 >= s.length >= 100) return "error s must be between 1 and 100"
  if (alpha.test(s)) return 'error s may only contain numerical digits'
  console.log(cypher())
  // go through string and see if each char 
  // let numberArr = s.split('')
  // let length = numberArr.length
  // start at end of string // can slice for 1 digit or for 2 digits // use two pointers 
  for(let i = 0; i < s.length; i++){
    
  }
  

  return 'ok'

}

const cypher = () => {
  const alphabet = Array.from(Array(26), (e, i) => String.fromCharCode(i + 97).toUpperCase());
  let obj = {}

  for(const letter of alphabet){
    obj[letter] = (alphabet.indexOf(letter)+1)
  }

  return obj
}

const countLetterSeen = (numberStr) => {
  let obj = cypher()
  numberStr = parseInt(numberStr)
  // does object contain numberStr value if it does return true and return the Key
  let values = Object.values(obj)
  if (values.includes(numberStr)) {
    let letter = Object.keys(obj).find(key => obj[key] === numberStr) 
    console.log('letter', letter)
    return 1
  } else return 0

}
// let object = cypher()
// let values = Object.values(object)
// console.log(values)
// console.log(countLetterSeen('12'))
console.log('11234'.split(''))
console.log(decodeWays('3'))