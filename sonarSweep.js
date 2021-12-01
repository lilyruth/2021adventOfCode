import arr from './measurementInput.mjs';

const getPrev = (measurements) => {

let count = 0;
for (let i = 1; i < measurements.length; i++ ) {
 if (measurements[i] > measurements[i-1]) {
  count++
 }
}
return count;
}

console.log(getPrev([199,200,208, 210,200,207,240,269,260,263]))

console.log(getPrev(arr))