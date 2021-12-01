import arr from './measurementInput.mjs';
let testArr1 = [199,200,208,210,200,207,240,269,260,263]

let testArr2 = [124,125,127,128,132,140,142,103,102,110,101,107]

/*
temp variable prevSum to hold sum of i, i+1, i+2
temp variable currSum to hold sum of i+1, i+2, i+3
compare currSum to prevSum
if currSum > prevSum
count++

*/

const getSumOfThree = arr => {
 let count = 0;
 let prevSum;
 let currSum;

 for (let i = 0; i < arr.length - 3; i++) {
   prevSum = arr[i] + arr[i+1] + arr[i+2]
   currSum = arr[i+1] + arr[i+2] + arr[i+3]

   if (currSum > prevSum) {
    count++
   }
 }
 return count;
}

console.log(getSumOfThree(arr))
