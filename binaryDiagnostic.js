import binaryInputArr from "./binaryInput.mjs";
/**
 * Diagnostic report is a list of binary numbers
 * power consumption
 * generate new binary numbers: 
 * gamma rate
 * Find gamma rate by locating the most common bit in the corresponding position of each of the numbers
 * epsilon rate
 * power consumption = gamma (decimal) * epsilon (decimal)
 * 
 * 
 */

// Get the most common bit 

const findMostCommon = arr => {
 
 let bitMap = {}
 let bitLength = arr[0].length;

 arr.forEach(num => {
  for (let i = 0; i < bitLength; i++) {
   if (num[i] === '0') {
    if (bitMap[i]) { 
     bitMap[i].zeroCount++ 
    } else {
     bitMap[i] = {
      zeroCount: 1,
      oneCount: 0
     }
    }
   } else if (num[i] === '1') {
    if (bitMap[i]) {
     bitMap[i].oneCount++   
    } else {
     bitMap[i] = {
      zeroCount: 0,
      oneCount: 1
    }
   }
  }
 }
})
 let bitMapEntries = Object.entries(bitMap)
 let gammaArr = []
 let epsilonArr = []

 bitMapEntries.forEach(digit => {
  if (digit[1].zeroCount > digit[1].oneCount) {
   gammaArr.push(0)
   epsilonArr.push(1)
  } else {
   gammaArr.push(1)
   epsilonArr.push(0)
  }
 })

 let gamma = gammaArr.join('')
 let epsilon = epsilonArr.join('')

 let gammaInt = parseInt(gamma, 2)
 let epsilonInt = parseInt(epsilon, 2)
 
 return gammaInt * epsilonInt
}

console.log(findMostCommon(binaryInputArr))