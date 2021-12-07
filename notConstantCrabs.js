import crabInput from './crabInput.mjs'
let examplePos = [16,1,2,0,4,2,7,1,2,14]

let totalFuel = (arr) => {
  
  let posSorted = arr.sort((a,b) => a - b)
  let posMin = posSorted[0]
  let posMax = posSorted[posSorted.length - 1]
  
  let posAndFuel = {}

  for (let i = posMin; i <= posMax; i++) {
   // valueToPos is the number of steps between all the other positions in the array and i, the position that is in the loop
   let valueToPos = arr.map(num => Math.abs(num - i))
   
   // to get total fuel, have to take each of the items in the array and sum them counting down and then add them all together
   let totalFuel = valueToPos.reduce((a,b) => {
     let fuel = 0;
     for (let i = b; i > 0; i--) {
      fuel += i
     }
     return a + fuel
   }, 0)
    
   posAndFuel[i] = totalFuel
  }
  console.log(posAndFuel)

  let fuelValues = Object.values(posAndFuel)

  let fuelValuesSorted = fuelValues.sort((a,b) => a - b)
  
  let lowestFuel = fuelValuesSorted[0]

  let bestPos;
  
  for (let key in posAndFuel) {
   if (posAndFuel[key] === lowestFuel) {
    bestPos = key;
    console.log('bestPos', bestPos)
   }
  }
  return lowestFuel
}

console.log(totalFuel(crabInput))