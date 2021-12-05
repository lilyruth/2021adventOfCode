/**
 * input of vent coordinates
 * need to return the # of points that have overlapping vents
 * Strategy: 
 * Every coordinate has a unique number which is x multiplied by y. This just won't work for x = 0 or y = 0. For the example I will shift everything up by 1 and that should give me the same number of results. The input doesn't appear to have this issue. All coordinates will be populated with a 0. If it falls in the line, then the count for each coordinate, 1 is added. At the end anything 2 or higher gets counted. 
 */

import ventInput from './ventInput.mjs'

let lines = []
let pointsMap = {}

let exampleInput = `1,10 -> 6,10
9,1 -> 1,9
10,5 -> 4,5
3,3 -> 3,2
8,1 -> 8,5
7,5 -> 3,1
1,10 -> 3,10
4,5 -> 2,5
1,1 -> 9,9
6,6 -> 9,3`

let inputSplit = ventInput.replace(/\n+/g, "|")
let input = inputSplit.replace(/ -> /g, ',')
input = input.split('|')

let inputForMinAndMax = ventInput.replace(/\n+/g, ',')
inputForMinAndMax = inputForMinAndMax.replace(/ -> /g, ',')
inputForMinAndMax = inputForMinAndMax.split(',')
inputForMinAndMax = inputForMinAndMax.map(num => +num)

let yInput = inputForMinAndMax.filter((num, index) => {
 if (index % 2 === 1) return num })
let xInput = inputForMinAndMax.filter((num, index) => {
 if (index % 2 === 0) return num })
yInput = yInput.sort((a,b) => a - b)
xInput = xInput.sort((a,b) => a - b)


let xMin = 0;
let xMax = 1000;
let yMin = 0; 
let yMax = 1000;

console.log('xMin', xMin, 'xMax', xMax, 'yMin', yMin, 'yMax', yMax)

//filter boards to only include horizontal or vertical lines

input.forEach(arr => {
 arr = arr.trim()
 arr = arr.split(',')
 if (arr[0] === arr[2] ||  arr[1] === arr[3]) {
  lines.push(arr)
 }
})


// get points to add to map
// formula for points (y-1)* xMax + x for each point on line
// push this to points Map with count

for (let i = 0; i < lines.length; i++) {

 let y = []
 let yAll = []
 let x = []
 let xAll = []

 if (lines[i][0] === lines[i][2]) {
  let x = +lines[i][2]
  y.push(+lines[i][1], +lines[i][3]) 
  y = y.sort((a,b) => a - b)
  // console.log('y', y[0], y[1])
  for (let i = yMin; i <= yMax; i++) {
   if (i >= y[0] && i <= y[1]) {
    yAll.push(i)
   }
  }
  // console.log(yAll)
  yAll.forEach(num => {
   let coordinate = (num - 1) * xMax + x;
   if (pointsMap[coordinate]) {
    pointsMap[coordinate]+=1
   } else {
    pointsMap[coordinate] = 1
   }
  })

 } else if (lines[i][1] === lines[i][3]) {
   let y = +lines[i][1]
   x.push(+lines[i][0], +lines[i][2]) 
   x = x.sort((a,b) => a - b)
   // console.log('x', x, x[0], x[1])
   for (let i = xMin; i <= xMax; i++) {
    if (i >= x[0] && i <= x[1]) {
     xAll.push(i)
    }
   }
   // formula for points (y-1)* xMax + x for each point on line
   // push this to points Map with count
  // console.log(xAll)
  xAll.forEach(num => {
   let coordinate = (y - 1) * xMax + num;
   if (pointsMap[coordinate]) {
    pointsMap[coordinate]+=1
   } else {
    pointsMap[coordinate] = 1
   }
 })
}
}

let pointsValues = Object.values(pointsMap)
pointsValues = pointsValues.filter(num => num > 1)
console.log(pointsValues.length)
