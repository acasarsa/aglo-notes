# power

```javascript
function power(base, exp){
    // base * base where loop = power
    if(exp === 0) return 1

    return base * power(base, exp-1)
}

power(2, 3)
```



