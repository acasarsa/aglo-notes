const isValid = function(s){
  // so i'm thinking there's some way where you would either remove them once closed or track that some how 
  // check if input is valid
  if (s === null || s === undefined) return false
  
  // let chars = s.split('') // turn s into array of parens
  // create an array to hold the popped off closed parens
  const stack = []
  // create an object where a key of open bracket points to it's closing bracket
  const keys = {
    "(": ")",
    "{": "}",
    "[": "]"
  }

  // for(const char of s){
  //   if(char in keys) {
  //     stack.push(keys[char])
  //   } else {
  //     if (stack.length === 0 || stack.pop() !== char){
  //       return false
  //     }
  //   }
    
  // }

  for(const char of s){
    console.log(char)
    if(char === '(' || char === '{' || char === '['){
      stack.push(char)
      console.log(stack)
      console.log('stack[stack.length - 1]:', stack[stack.length - 1], '||', 'keys[char]', char)
    } else {
      if(stack[stack.length - 1] === keys[char]) {
        
        
        stack.pop()
      } 
    }
  }

  return stack.length === 0 

}
console.log(isValid('({{}})'))