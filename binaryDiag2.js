import binaryInputArr from "./binaryInput.mjs";

/**
 * Filter by number where first bit matches bit criteria
 * If only one number is left, stop; this is rating value for which you are searching 
 * Otherwise, repeat the process, considering the next bit to the right
 * Oxygen Generator Rating: most common value in the current bit position, keep only the remaining numbers with the most common value in that position. If 0 count == 1 count then keep the values with 1
 * 
 * C02 rating, determine least common value and keep only those with the bit in that position. keep 0 if equal this time.
 * 
 * @param {*} arr 
 * @returns 
 */


const getValue = arr => {
 
 let bitArrO2 = [...arr];
 let bitArrC02 = [...arr];
 let oxygenIteration = 0;
 let scrubberIteration = 0;

 // start with array & position number
 // get 1 vs 0 count for that position number for everything in the array
 // filter the array accordingly 
 // return the last number

 const filterBits02 = arr => {
  if (arr.length === 1) {
   return arr
  }
  
  let countZero = 0;
  let countOne = 0;

  arr.forEach(num => {
    if (num[oxygenIteration] === '1') {
     countOne++
    } else {
     countZero++
    }
  })

  if (countOne >= countZero) {
   arr = arr.filter(num => num[oxygenIteration] === '1')
  } else if (countZero > countOne) {
   arr = arr.filter(num => num[oxygenIteration] === '0') 
  }
  
  oxygenIteration++
  return filterBits02(arr)
 }

 const filterBitsC02 = arr => {
  if (arr.length === 1) {
   return arr
  }
  
  let countZero = 0;
  let countOne = 0;

  arr.forEach(num => {
    if (num[scrubberIteration] === '1') {
     countOne++
    } else {
     countZero++
    }
  })

  if (countOne < countZero) {
   arr = arr.filter(num => num[scrubberIteration] === '1')
  } else if (countZero <= countOne) {
   arr = arr.filter(num => num[scrubberIteration] === '0') 
  }
  
  scrubberIteration++
  return filterBitsC02(arr)
 }
 
 let oxygenRating = parseInt(filterBits02(bitArrO2)[0], 2)

 let scrubberRating = parseInt(filterBitsC02(bitArrC02)[0], 2)

 return oxygenRating * scrubberRating;

}

console.log(getValue(binaryInputArr))