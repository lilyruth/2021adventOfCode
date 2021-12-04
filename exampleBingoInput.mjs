/**
 * Have to store the numbers in a way that you can tell if they make a row or column AND they are called or not. 
 * Have to write a program to show when the number is called that sees if the number is in the bingo board and then if it is changed called to true
 * Can create an array of numbers. Every 25 numbers makes one bingo board. 
 */

let bingoBoardsUnparsed = 

`22 13 17 11  0
 8  2 23  4 24
 21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7`

let bingoSplit = bingoBoardsUnparsed.replace(/\n+|\s+/gi, ",")
bingoSplit = bingoSplit.replace(/,,/g, ",")
let bingoBoards = bingoSplit.split(',')

let boards = []
bingoBoards.forEach(item => {
 if (item === '0') {
  boards.push(0)
 } else {
  boards.push(+item)
 }
})

export default boards;
