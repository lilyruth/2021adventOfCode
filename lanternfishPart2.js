// Remember this is 0-indexed
  
  // if num is 1-8 it counts down
  
  // if num is 0, reset num to 6 and add an 8 to the end of the array
  
  // Get length after count is 80 (18 for first test case)

  import {strInput} from './lanternfishInput.mjs'

  let exampleInput = '34312'

  const getLanternfish = str => {

  let lanternfishCounts = {
   1: 0,
   2: 0,
   3: 0,
   4: 0,
   5: 0,
   6: 0,
   7: 0,
   8: 0,
   0: 0
  }

  for (let i = 0; i < str.length; i++) {
   let count = str[i]
   lanternfishCounts[count]++
  }
  console.log(lanternfishCounts)
  
  let count = 0;

  while (count < 256) {

    let newCounts = {};

     if (lanternfishCounts['1'] > 0) {
      newCounts['0'] = lanternfishCounts['1']
     }
     
     if (lanternfishCounts['2'] > 0) {
      newCounts['1'] = lanternfishCounts['2']
     }
     
     if (lanternfishCounts['3'] > 0) {
      newCounts['2'] = lanternfishCounts['3']
     }
     
     if (lanternfishCounts['4'] > 0) {
      newCounts['3'] = lanternfishCounts['4']
     }
     
     if (lanternfishCounts['5'] > 0) {
      newCounts['4'] = lanternfishCounts['5']
     }
     
     if (lanternfishCounts['6'] > 0) {
      newCounts['5'] = lanternfishCounts['6']
     }
     
     if (lanternfishCounts['7'] > 0) {
      newCounts['6'] = lanternfishCounts['7']
     }
     
     if (lanternfishCounts['8'] > 0) {
      newCounts['7'] = lanternfishCounts['8']
     }
     
     if (lanternfishCounts['0'] > 0) {
      if (newCounts['8']) {
       newCounts['8'] += lanternfishCounts['0']
      } else if (!newCounts['8']) {
       newCounts['8'] = lanternfishCounts['0']
      }
      if (newCounts['6']) {
       newCounts['6'] += lanternfishCounts['0']
      } else if (!newCounts['6']) {
        newCounts['6'] = lanternfishCounts['0']
      }
     }
     lanternfishCounts = newCounts;
     
     count++
     // console.log('day', count, lanternfishCounts)
    }
    let lanternfishValues = Object.values(lanternfishCounts);
    let population = lanternfishValues.reduce((a,b) => a+b)
    return population
   }

  
  
  console.log(getLanternfish(strInput))
  