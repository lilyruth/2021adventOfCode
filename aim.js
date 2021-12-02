import directionsArr from './diveInput.mjs';

const getPlot = arr => {
 let initialPos = {
  aim: 0, // down and up increase / decrease aim by x
  horizontal: 0, // forward increases horizontal by x
  depth: 0 // forward increases depth by aim * x 
 }

 const takeDirection = item => {
  if (item.includes('forward')) {
   let forwardCount = +item.substr(-1)
   initialPos.horizontal += forwardCount
   initialPos.depth += (initialPos.aim * forwardCount)
   return initialPos
  }

  if (item.includes('down')) {
   let count = +item.substr(-1)
   initialPos.aim += count
   return initialPos
  }

  if (item.includes('up')) {
   let count = +item.substr(-1)
   initialPos.aim -= count
   return initialPos
  }
 }

 arr.forEach(item => takeDirection(item))

 return initialPos.horizontal * initialPos.depth
}

console.log(getPlot(directionsArr))