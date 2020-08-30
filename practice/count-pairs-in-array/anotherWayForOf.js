function countPairs (n, arr) {
    const colors = {}
    
    for(const color of arr)
        if (colors[color]) colors[color]++
        else colors[color] = 1 

    return Object.values(colors).reduce( (sum, b) => sum + (b/2)|0, 0)
}

const n = 8
const socks = [5, 10, 5, 20, 20, 20, 5, 5]

// console.clear()
console.log(`Total: ${countPairs(n, socks)} pairs`)