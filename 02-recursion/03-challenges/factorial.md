# factorial

```javascript
function factorial(num){
   // num * num-1 until 1
   if(num === 1 || num === 0) return 1
   return num * factorial(num-1)
}
factorial(0)
```



