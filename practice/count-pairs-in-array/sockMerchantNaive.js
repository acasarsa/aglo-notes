function sockMerchant(n, arr){
    let sorted = arr.sort( (a,b) => a - b)
    let pairs = 0

    for (let i = 0; i < n - 1; i++ ) {
    // stop at end of arr n is number of sox but index starts at 0 so n - 1 is last index
    if( sorted[i] === sorted[i + 1] ) {
      // if it's = then add to pairs and move  the i
        pairs++
        i += 1
    }
    }

    return pairs
}

let arr = [30, 7, 10, 20, 20, 30]
let n = 6

// sockMerchant(n, ar)
console.log(`Total: ${sockMerchant(n, arr)} pairs`)