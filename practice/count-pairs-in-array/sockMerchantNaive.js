

function sockMerchant(n, arr){
    let sorted = arr.sort( (a,b) => a - b)
    let pairs = 0

    for (let i = 0; i < n - 1; i++ ) {
      if( sorted[i] === sorted[i + 1] ) {
          pairs++
          i += 1
      }
    }

    return pairs
}

let arr = [30, 7, 10, 20, 20, 30]
let n = 6

console.log(`Total: ${sockMerchant(n, arr)} pairs`)




