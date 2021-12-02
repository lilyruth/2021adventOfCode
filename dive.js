import directionsArr from './diveInput.mjs';

const getPlot = arr => {
 let initialPos = {
  horizontal: 0,
  depth: 0
 }

 const takeDirection = item => {
  if (item.includes('forward')) {
   let count = +item.substr(-1)
   initialPos.horizontal += count
   return initialPos
  }

  if (item.includes('down')) {
   let count = +item.substr(-1)
   initialPos.depth += count
   return initialPos
  }

  if (item.includes('up')) {
   let count = +item.substr(-1)
   initialPos.depth -= count
   return initialPos
  }
 }

 arr.forEach(item => takeDirection(item))

 return initialPos.horizontal * initialPos.depth
}

console.log(getPlot(directionsArr))
