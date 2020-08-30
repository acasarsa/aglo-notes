// dictionary approach - stock each color as a key and total up the pair count
function stockAndCountWithComments( n, arr ){
    let pairs = 0
    const colors = arr.reduce( (acc, val) => { 
        ( !!acc[val] ? acc[val] += 1 : acc[val] = 1 )
        console.log('acc', acc)
        // builds object as we go
        // callback takes in an accumulator & current value
        // check if current value exists as a key in accumulator, if it doesn't create key = 1, if it does increment
        
        return acc
        // return acc after each iteration 
    }, {} )
    // add object as second argument so you will put those key value pairs in there.
    // 
    // now we have object with each color as a key. we can look through it

    Object.keys(colors).forEach( n => { let _pair = parseInt( colors[n] / 2) 
        console.log(colors[n] / 2)
        if ( _pair >= 1 ) pairs += _pair
        // _pair is a local version of pairs

        // object.keys gives us all the keys in an array. for each one of those we perform the logic in the callback. 
        // n is the key itself so like 5, 10, 20. colors['5'] would then be the value of that key. we devide that by 2 
        // to see if it's >= 1 then if so we add that amount to the pairs value. 
    })
    return pairs
}

///////////////////
// without comments
//////////////////  

function stockAndCount( n, arr ){
    let pairs = 0
    const colors = arr.reduce( (acc, val) => { 
        ( !!acc[val] ? acc[val] += 1 : acc[val] = 1 )
        return acc
    }, {} )

    Object.keys(colors).forEach( n => { let _pair = parseInt( colors[n] / 2) 

        console.log(n, ':', _pair)
        if ( _pair >= 1 ) pairs += _pair
    })

    return pairs
}
const n = 8
const socks = [5, 10, 5, 20, 20, 20, 5, 5]

// console.clear()
console.log(`Total: ${stockAndCount(n, socks)} pairs`)