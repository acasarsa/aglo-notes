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

let arr = [ 6, 0, 6, 7, 6, 6, 4, 7, 7,7, 7,7]
// should be 2 pairs
let n = 12
// sockMerchant(n, ar)
console.log(`Total: ${sockMerchant(n, arr)} pairs`)