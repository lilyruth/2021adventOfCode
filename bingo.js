import exampleBingoBoards from './exampleBingoInput.mjs'
import bingoBoards from './bingoInput.mjs'


// let numbersCalled = [7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1]

let numbersCalled = [46,79,77,45,57,34,44,13,32,88,86,82,91,97,89,1,48,31,18,10,55,74,24,11,80,78,28,37,47,17,21,61,26,85,99,96,23,70,3,54,5,41,50,63,14,64,42,36,95,52,76,68,29,9,98,35,84,83,71,49,73,58,56,66,92,30,51,20,81,69,65,15,6,16,39,43,67,7,59,40,60,4,90,72,22,0,93,94,38,53,87,27,12,2,25,19,8,62,33,75]

let boardAndIndex = {};
let winningBoard = [];
let winningIndexCalled;
let sumOfUnmarkedNums = 0;
let sumOfMarkedNums = 0;
let gotdangAnswer;
let winningIndexOfNumCalled;


const winningIndecesArrays = [
 [0,1,2,3,4],
 [5,6,7,8,9],
 [10,11,12,13,14],
 [15,16,17,18,19],
 [20,21,22,23,24],
 [0,5,10,15,20],
 [1,6,11,16,21],
 [2,7,12,17,22],
 [3,8,13,18,23],
 [4,9,14,19,24]
]

// takes in an array of a single board and the called numbers
// write a helper function to check every number in the board against the winning combination arrays 

// calculate board and index: 

const calcBoardAndIndex = idx => {
 let board = Math.floor( idx / 25 )
 let boardsIdx = idx % 25
 if (boardAndIndex[board]) {
  boardAndIndex[board].push(boardsIdx)
 } else {
  boardAndIndex[board] = [boardsIdx]
 }

 let tempArr = boardAndIndex[board]

 for (let i = 0; i < winningIndecesArrays.length; i++) {
  let count = 0;
  for (let j = 0; j < winningIndecesArrays[i].length; j++) {
    let winningIndex = winningIndecesArrays[i][j]
    if (tempArr.includes(winningIndex)) {
     count++
     if (count === 5) {
      winningBoard.push(board)
      winningIndexOfNumCalled = idx;
     }
    }
  }
 }
 return winningBoard, winningIndexOfNumCalled;
}

const getSums = (arr, winningBoard, inputNums) => {

 let winningNum = arr[winningIndexOfNumCalled]
 let endOfCalledNums = inputNums.indexOf(winningNum)
 let calledNums = inputNums.slice(0, endOfCalledNums + 1)

 let winningCard = [];
 let beginningIndex = winningBoard[0] * 25;
 for (let i = 0; i < 25; i++) {
  winningCard.push(arr[i+beginningIndex])
 }

 winningCard.forEach(num => {
  if (!calledNums.includes(num)) {
    sumOfUnmarkedNums += num;
    console.log(sumOfUnmarkedNums)
  } 
 })
 gotdangAnswer = sumOfUnmarkedNums * winningNum;
 return gotdangAnswer;
}


const checkNums = (arr, inputNums) => {
 
 for (let m = 0; m < inputNums.length; m++) {
  arr.forEach((num, index) => {
   if (winningBoard.length === 0) {
    if (num === inputNums[m]) {
     calcBoardAndIndex(index)
    }
   }
  })
 }
 return getSums(arr, winningBoard, inputNums)
}



console.log(checkNums(bingoBoards, numbersCalled))