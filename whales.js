import crabInput from './crabInput.mjs'
let examplePos = [16,1,2,0,4,2,7,1,2,14]

let totalFuel = (arr) => {
  
  let posSorted = arr.sort((a,b) => a - b)
  let posMin = posSorted[0]
  let posMax = posSorted[posSorted.length - 1]
  
  let posAndFuel = {}

  for (let i = posMin; i <= posMax; i++) {
   let valueToPos = arr.map(num => Math.abs(num - i))
   console.log(valueToPos)
   let total =  valueToPos.reduce((a,b) => a + b)
   posAndFuel[i] = total
  }
  
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

console.log(totalFuel(examplePos))