// calculate sum of all num from 1 up to and including n 
// n = length of array for instance
function addUpTo(n) {

  let total = 0
  for (let i = 1; i <= n; i++) {
    total += i
  }

  return total
}

// n = [1, 2, 3, 4, 5, 6].length


function addUpToII(n) {

  return n * (n + 1) / 2
}

function testPerformance() {
  let t1 = performance.now()
  addUpTo(100000000)
  let t2 = performance.now()
  
  console.log(`Time Elapsed option 1: ${(t2 - t1) / 1000} seconds.`)
  let r = document.createElement('div')
      r.textContent = `Time Elapsed option 1: ${(t2 - t1) / 1000} seconds`
  let body = document.querySelector('body')
  
  let time1 = performance.now()
  addUpToII(100000000)
  let time2 = performance.now()
  console.log(`Time Elapsed option 2: ${(time2 - time1) / 1000} seconds.`)
  
  let r2 = document.createElement('div')
      r2.textContent = `Time Elapsed option 2: ${(time2 - time1) / 1000} seconds ` 
  let dif = document.createElement('p')
      dif.textContent = `Difference between 1st and 2nd option is: ${Math.round((t2 - t1) - (time2 - time1))} seconds`
  
  body.append(r)
  body.append(r2)
  body.append(dif)
}










// console.log('next')

// console.log(`difference: ${((t2 - t1) - (time2 - time1))}`)
// this only works for consecutive numbers and starting from 1 