let example = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`

let myInput = `4721224663
6875415276
2742448428
4878231556
5684643743
3553681866
4788183625
4255856532
1415818775
2326886125`

let input = myInput.split('\n').join(',').replace(/,/g, '').split('')
input.splice(0, 0, '200')
input.splice(11,0,'200')
input.splice(12,0,'200')
input.splice(23,0,'200')
input.splice(24,0,'200')
input.splice(35,0,'200')
input.splice(36,0,'200')
input.splice(47,0,'200')
input.splice(48,0,'200')
input.splice(59,0,'200')
input.splice(60,0,'200')
input.splice(71,0,'200')
input.splice(72,0,'200')
input.splice(83,0,'200')
input.splice(84,0,'200')
input.splice(95,0,'200')
input.splice(96,0,'200')
input.splice(107,0,'200')
input.splice(108,0,'200')
input.splice(119,0,'200')

let inputNums = []
input.forEach(num => inputNums.push(+num))
console.log(inputNums)

let flashes = []
let tensIndeces = []
let tensCount = 0
let check = []

//find the tens in each step
const getTens = arr => {
 check = []
 tensIndeces = []
 if (arr.indexOf(10) !== -1) { 
  arr.forEach((item, index) => {
   if (item === 10) {
    tensIndeces.push(index)
   }
  })

  runFlashes(arr)
 } 
}

const runFlashes= arr => {

 if (tensIndeces.length=== 0) {
  return
 } else {

  let tenIndex = tensIndeces.shift()

  if (check.indexOf(tenIndex) !== -1) {
   // console.log('did not run ', tenIndex)
   return runFlashes(arr)
  } else {
   
   check.push(tenIndex)
   arr[tenIndex] = 0
   tensCount++

   let upLeftDiagonal = tenIndex - 13
   let up = tenIndex - 12
   let upRightDiagonal = tenIndex - 11

   let left = tenIndex - 1
   let right = tenIndex + 1

   let downLeftDiagonal = tenIndex + 13
   let down = tenIndex + 12
   let downRightDiagonal = tenIndex + 11
   
   // console.log('before up Left', '9', arr[9], '10', arr[10])
   if (upLeftDiagonal >= 0 && upLeftDiagonal < 119) {
    if (arr[upLeftDiagonal] === 9 && check.indexOf(upLeftDiagonal) === -1) {
      tensIndeces.push(upLeftDiagonal)
     } else if (arr[upLeftDiagonal] === 0 && check.indexOf(upLeftDiagonal) !== -1) {
   
     } else {
      arr[upLeftDiagonal] += 1
    } 
   }
   // console.log('after up Left', '9', arr[9], '10', arr[10])
   if (up >= 0 && up < 119) {
    if (arr[up] === 9 && check.indexOf(up) === -1) {
      tensIndeces.push(up)
     } else if (arr[up] === 0 && check.indexOf(up) !== -1) {
    
     } else {
      arr[up] += 1
    } 
   }
   // console.log('after up ', '9', arr[9], '10', arr[10])
   if (upRightDiagonal >= 0 && upRightDiagonal < 119) {
    if (arr[upRightDiagonal] === 9 && check.indexOf(upRightDiagonal) === -1) {
      tensIndeces.push(upRightDiagonal)
     } else if (arr[upRightDiagonal] === 0 && check.indexOf(upRightDiagonal) !== -1) {
    
     } else {
      arr[upRightDiagonal] += 1
    } 
   }
   // console.log('after up Right', '9', arr[9], '10', arr[10])
   if (left >= 0 && left < 119) {
    if (arr[left] === 9 && check.indexOf(left) === -1) {
      tensIndeces.push(left)
     } else if (arr[left] === 0 && check.indexOf(left) !== -1) {
     
     } else {
      arr[left] += 1
    } 
   }
   // console.log('after Left', '9', arr[9], '10', arr[10])
   if (right >= 0 && right < 119) {
    if (arr[right] === 9 && check.indexOf(right) === -1) {
      tensIndeces.push(right)
     } else if (arr[right] === 0 && check.indexOf(right) !== -1) {
    
     } else {
      arr[right] += 1
    } 
   }
   // console.log('after right', '9', arr[9], '10', arr[10])
   if (downLeftDiagonal >= 0 && downLeftDiagonal < 119) {
    if (arr[downLeftDiagonal] === 9 && check.indexOf(downLeftDiagonal) === -1) {
      tensIndeces.push(downLeftDiagonal)
     } else if (arr[downLeftDiagonal] === 0 && check.indexOf(downLeftDiagonal) !== -1) {
   
     } else {
      arr[downLeftDiagonal] += 1
    } 
   }
   // console.log('after down left', '9', arr[9], '10', arr[10])
   if (down >= 0 && down < 119) {
    if (arr[down] === 9 && check.indexOf(down) === -1) {
      tensIndeces.push(down)
     } else if (arr[down] === 0 && check.indexOf(down) !== -1) {
 
     } else {
      arr[down] += 1
    } 
   }
   // console.log('after down', '9', arr[9], '10', arr[10])
   if (downRightDiagonal >= 0 && downRightDiagonal < 119) {
    if (arr[downRightDiagonal] === 9 && check.indexOf(downRightDiagonal) === -1) {
      tensIndeces.push(downRightDiagonal)
     } else if (arr[downRightDiagonal] === 0 && check.indexOf(downRightDiagonal) !== -1) {
    
     } else {
      arr[downRightDiagonal] += 1
    } 
   }
   // console.log('after down right', '9', arr[9], '10', arr[10])
   return runFlashes(arr)
  }
 }
}

const checkLights = arr => {
 
 let indeces = [1,2,3,4,5,6,7,8,9,10,13,14,15,16,17,18,19,20,21,22,25,26,27,28,29,30,31,32,33,34,37,38,39,40,41,42,43,44,45,46,49,50,51,52,53,54,55,56,57,58,61,62,63,64,65,66,67,68,69,70,73,74,75,76,77,78,79,80,81,82,85,86,87,88,89,90,91,92,93,94,97,98,99,100,101,102,103,104,105,106,109,110,111,112,113,114,115,116,117,118];
 
 let zeroes = indeces.every(item => arr[item] === 0)
 console.log('zeroes', zeroes)
 if (zeroes === true) {
  console.log(arr)
 }
 return zeroes
}

const lights = arr => { 
 let magic;
 for (let i = 1; i < 600; i++) {
  arr = arr.map(item => item+=1)
  getTens(arr)
  if (checkLights(arr) === true) {
   magic = i
   return magic
  }
 }  
 return magic
}

console.log(lights(inputNums))