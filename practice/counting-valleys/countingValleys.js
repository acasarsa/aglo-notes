// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly n steps, for every step it was noted if it was an uphill, U, or a downhill, D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

function countingValleys (stepCount, directionString){
  // const min = 2 
  // const max = 1000000
  let valleys = 0
  let level = 0

  for(let i = 0; i < directionString.length; i++) {
    let step = directionString[i]
    level += (step === 'U') ? 1 : -1
    console.log(level)
    valleys += (level === 0 && step === 'U') ? 1 : 0 

  }

  // valley++ when level == -1
  return `total valleys: ${valleys}`

  
  // turn string into an array
  // could add a validator to make sure the info is what u expect. 

  // could also check that steps is within parameters. 

  // convert the array path into integers so you can move up or down 
  

  // need to check if we are above or below sea level. 
  // we are tracking valleys and valleys are created when we are in one then we come back to sea level

}

console.log(countingValleys(8, 'DDUUDDUUDDUUDDUU'))