function duplicateNums(nums){
  let seen = {}
  // go through array and create key for each number and set its value to 1 
  // if it exists set it's value to 2 
  // return key who's value is greater than 1

  // for (let i = 0; i < nums.length; i++) {
  //   console.log(nums[i])
  //   if(seen[nums[i]]) return nums[i]
  //   else seen[nums[i]] = 1
  // }

  for (const i of nums) {
      if(seen[i]) return i
      else seen[i] = 1
  }
  return -1
}

console.log(duplicateNums([1,4,5,2,34,4]))