import pointsInput from './smokePoints.mjs'

let exampleInput = 
`2199943210
3987894921
9856789892
8767896789
9899965678`


let input = pointsInput.split('\n')

let inputArray = []

input.forEach(item => inputArray.push(item.split('')))

console.log(inputArray)

let lowPointsInBasin = {};
let coordinatesAlreadyChecked = [];
let pointNum;

const checkNeighbors = (coordinatesToCheck) => {

 if (coordinatesToCheck.length === 0) return

 let itemToCheck = coordinatesToCheck.shift()
 let [a,b] = itemToCheck;
 console.log('checking coordinates:', itemToCheck)
 // check to make sure not already seen
 
 if (coordinatesAlreadyChecked.length > 0) {
  for (let l = 0; l < coordinatesAlreadyChecked.length; l++) {
    if (coordinatesAlreadyChecked[l][0] == a && coordinatesAlreadyChecked[l][1] == b) {
     console.log([a,b], 'is already here')
     return checkNeighbors(coordinatesToCheck)
    }
  }
 }
 // check top
 if (a >= 1 && inputArray[a-1][b] != '9') {
  coordinatesToCheck.push([a-1, b])
  console.log(`added [${a-1}, ${b}]`, coordinatesToCheck)
 }
 // check left
 if (b >= 1 && inputArray[a][b-1] != '9') {
  coordinatesToCheck.push([a, b-1])
  console.log(`added [${a}, ${b-1}]`, coordinatesToCheck)
 }
 // check bottom 
 if (a < input.length - 1 && inputArray[a+1][b] != '9') {
  coordinatesToCheck.push([a+1, b])
  console.log(`added [${a+1}, ${b}]`, coordinatesToCheck)
 }
 // check right
 if (b < inputArray[a].length - 1 && inputArray[a][b+1] != '9') {
  coordinatesToCheck.push([a, b+1])
  console.log(`added [${a}, ${b+1}]`, coordinatesToCheck)
 }

 // add to coordinates already checked
 coordinatesAlreadyChecked.push([a,b])

 // increase num in basin
 lowPointsInBasin[pointNum].push(inputArray[a][b])
 console.log(`added to lowPointsInBasin pointNum: ${pointNum}, value: ${inputArray[a][b]}, coordinates: [${a}, ${b}]`)

 // return recursive function call
 return checkNeighbors(coordinatesToCheck)
}

for (let i = 0; i < input.length; i++) {
 for (let j = 0; j < input[i].length; j++) {

  let point = input[i][j]
  let above;
  let below;
  let left;
  let right;
  let coordinatesToCheck = [];
  let numInBasin;
  pointNum = [i * input[0].length + j +1]

  if (i > 0) {
   above = input[i-1][j]
  } else above = null
  if (i+1 < input.length) {
  below = input[i+1][j]
  } else below = null
  if (j != 0) {
   left = input[i][j-1]
  } else left = null
  if (j + 1 < input[i].length) {
  right = input[i][j+1]
  } else right = null
  
  if (above == null || point < above) {
   if (below == null || point < below) {
    if (left == null || point < left) {
     if (right == null || point < right) {
    
      lowPointsInBasin[pointNum] = []
      coordinatesToCheck.push([i,j])
      checkNeighbors(coordinatesToCheck)
     }
    }
   }
  }
  }
 }

 console.log(lowPointsInBasin)

 let basinValues = Object.values(lowPointsInBasin).map(item => item.length)

 let largestBasins = basinValues.sort((a,b) => b - a)

 console.log(largestBasins[0] * largestBasins[1] * largestBasins[2])
