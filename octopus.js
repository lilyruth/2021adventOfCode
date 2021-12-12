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

let input = example.split('\n').join(',').replace(/,/g, '').split('')
let inputNums = []
input.forEach(num => inputNums.push(+num))
console.log(inputNums)

// energy level inccreases by 1 
// at 9 + 1 octopus flashes and resets to zero
// when octopus flashes it gives 1 energy level to those that are around it, including diagonal
// need to count the number of times 10 is hit

// helper function
let flashes = []
let tensIndeces = []
let tensCount = 0
let check = []

const getTens = arr => {
 check = []
 tensIndeces = []
 if (arr.includes(10)) { 
  arr.forEach((item, index) => {
   if (item === 10) {
    tensIndeces.push(index)
   }
  })
  runFlashes(arr)
 } else return
}
  // console.log(tensIndeces)
 const runFlashes = arr => {

  if (tensIndeces.length === 0) {
   return 
  } else {
   
    let ten = tensIndeces.shift()
    if (!check.find(item => item === ten)) {
       
      tensCount++
      check.push(ten)
     
      let tenUpLeftDiagonal = ten - 11
      let tenUp = ten - 10
      let tenUpRightDiagonal = ten - 9
      let tenLeft = ten - 1
      let tenRight = ten + 1
      let tenDownLeftDiagonal = ten + 9
      let tenDown = ten + 10
      let tenDownRightDiagonal = ten + 11

      arr[ten] = 0

     if (0 <= tenUpLeftDiagonal) {
      if (tenUpLeftDiagonal < 100) {
       if (!check.find(item => item === tenUpLeftDiagonal)) {
        if (arr[tenUpLeftDiagonal] === 9) {
        arr[tenUpLeftDiagonal] += 1
        tensIndeces.push(tenUpLeftDiagonal)
       } else {    
        arr[tenUpLeftDiagonal] += 1
        }
       }  
      }
     }

     if (0 <= tenUp) {
      if (tenUp < 100) {
       if (!check.find(item => item === tenUp)) {
        if (arr[tenUp] === 9) {
         arr[tenUp] += 1
         tensIndeces.push(tenUp)
        } else {  
        arr[tenUp] += 1
        }
       }  
      }
     }

     if (0 <= tenUpRightDiagonal) {
      if (tenUpRightDiagonal < 100) {
       if (!check.find(item => item === tenUpRightDiagonal)) {
        if (arr[tenUpRightDiagonal] === 9) {    
          arr[tenUpRightDiagonal] += 1
         tensIndeces.push(tenUpRightDiagonal)
        } else {
 
         arr[tenUpRightDiagonal] += 1
        }
       }  
      }
     }
   
     if (0 <= tenLeft) {
      if (tenLeft < 100) {
       if (!check.find(item => item === tenLeft)) {
        if (arr[tenLeft] === 9) {
        arr[tenLeft] += 1
        tensIndeces.push(tenLeft)
       } else {
     
        arr[tenLeft] += 1
        }
       }  
      }
     }

     if (0 <= tenRight) {
      if (tenRight < 100) {
       if (!check.find(item => item === tenRight)) {
        if (arr[tenRight] === 9) {

         arr[tenRight] += 1
         tensIndeces.push(tenRight)
        } else {
    
         arr[tenRight] += 1
        }
       }  
      }
     }

     if (0 <= tenDownLeftDiagonal) {
      if (tenDownLeftDiagonal < 100) {
       if (!check.find(item => item === tenDownLeftDiagonal)) {
        if (arr[tenDownLeftDiagonal] === 9) {
         arr[tenDownLeftDiagonal] += 1
         tensIndeces.push(tenDownLeftDiagonal)
        } else {
     
         arr[tenDownLeftDiagonal] += 1
        }
       }  
      }
     }

     if (0 <= tenDown) {
      if (tenDown < 100) {
       if (!check.find(item => item === tenDown)) {
        if (arr[tenDown] === 9) {
         arr[tenDown] += 1
         tensIndeces.push(tenDown)
        } else {
    
         arr[tenDown] += 1
        }
       }  
      }
     }

     if (0 <= tenDownRightDiagonal) {
      if (tenDownRightDiagonal < 100) {
       if (!check.find(item => item === tenDownRightDiagonal)) {
        if (arr[tenDownRightDiagonal] === 9) {
         arr[tenDownRightDiagonal] += 1
         tensIndeces.push(tenDownRightDiagonal)
       } else {
        arr[tenDownRightDiagonal] += 1
        }
       }  
      }
     }
    return (runFlashes(arr))
   } else {
    console.log('in the check')
    return runFlashes(arr)
   }
 }
}
const lights = arr => {

 for (let i = 0; i < 3; i++) {
  console.log('count before', i, arr)
  arr = arr.map(item => item+=1)
  getTens(arr)
 }  
 
 return tensCount;
}

console.log(lights(inputNums))