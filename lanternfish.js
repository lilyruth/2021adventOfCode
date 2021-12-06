// Remember this is 0-indexed
  
  // if num is 1-8 it counts down
  
  // if num is 0, reset num to 6 and add an 8 to the end of the array
  
  // Get length after count is 80 (18 for first test case)

import numInput from './lanternfishInput.mjs'

let exampleInput = [3,4,3,1,2]

const getLanternfish = arr => {

let workingArr = exampleInput.slice()

let count = 0;

while (count < 80) {
  
  let tempArr = []
 
  for (let i = 0; i < workingArr.length; i++) {
   if (workingArr[i] >= 1) {
    if (workingArr[i] <= 8) {
    workingArr[i] =  workingArr[i]-=1
    }
   } else if (workingArr[i] === 0) {
    tempArr.push(8)
    workingArr[i] = 6
   }
  }

  if (tempArr.length > 0) {
  workingArr = [...workingArr, ...tempArr]
  }
  count++
}

return workingArr.length
}
console.log(getLanternfish(exampleInput))
