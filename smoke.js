import pointsInput from './smokePoints.mjs'

let exampleInput = 
`2199943210
3987894921
9856789892
8767896789
9899965678`

// low points in the above example are 1,0,5,5: lower than what is above, below or on the sides

// risk level of a low point is 1 + height

// sum risk levels

let input = pointsInput.split('\n')

console.log(input)

let lowPoints = []; 
let riskPoints = []

for (let i = 0; i < input.length; i++) {
 for (let j = 0; j < input[i].length; j++) {
  let point = input[i][j]
  let above;
  let below;
  let left;
  let right;

  if (i > 0) {
   above = input[i-1][j]
  } else above = 100
  if (i+1 < input.length) {
  below = input[i+1][j]
  } else below = 100
  if (j != 0) {
   left = input[i][j-1]
  } else left = 100
  if (j + 1 < input[i].length) {
  right = input[i][j+1]
  } else right = 100
  // console.log('point', point,'above', above,'below', below,'left', left, 'right',right)
  
  if (point < above && point < below && point < left && point < right) {
   lowPoints.push(point)
  }
 }

}

console.log(lowPoints)
lowPoints.forEach(item => {
 +item; 
 item++
 riskPoints.push(item)
})
console.log(riskPoints)
let riskLevel = riskPoints.reduce((a,b) => a + b)
console.log(riskLevel)