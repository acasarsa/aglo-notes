# 01-factorial-recursion

### examples:

factorial 

```javascript
// iterative solution
function factorialIS(num) {
  let total = 1
  for(let i = num; i > 1; i--){
    total *= i
  }
  return total
}

factorial(3)

// recursive 

function factorial(num){
  if(num === 1) return 1
  return num * factorial(num-1)
}
```

{% embed url="https://repl.it/@AndrewCasarsa/factorial" %}

possible errors: 

* no base case 
  * u forget to set one it will lead to an infinite loop
  * or forget to return something in the base case
* you set the wrong return 
  * return num \* factorial\(num\) 
  * this will go on forever too because it doesn't hit the base case
  * these are called stackoverflows 

