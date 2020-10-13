// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers. 

// Return True if n is a happy number, and False if not.

function isHappy(n) {

  let seen = {};
  
  seen[n] = true;

  while (true) {
    n = Array.from(n.toString()).map(digit => digit ** 2 ).reduce((a,b) => a + b)
    if (n === 1) return true;
    else if (seen[n]) return false;
    else seen[n] = true;
  }

}

console.log(isHappy(19))
