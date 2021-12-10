import syntaxInput from './syntaxInput.mjs'

let example = `[({(<(())[]>[[{[]{<()<>>
 [(()[<>])]({[<{<<[]>>(
 {([(<{}[<>[]}>{[]{[(<()>
 (((({<>}<{<{<>}{[]{[]{}
 [[<[([]))<([[{}[[()]]]
 [{[{({}]{}}([{[{{{}}([]
 {<[[]]>}<{[{[{[]{()[[[]
 [<(<(<(<{}))><([]([]()
 <{([([[(<>()){}]>(<<{{
 <{([{{}}[<[[[<>{}]]]>[]]`

let input = syntaxInput.split('\n')
console.log(input)

let filteredLines = []
let corruptedChars = {
 ')': 0,
 ']': 0,
 '}': 0,
 '>': 0
}


const validLine = str => {
 
 str = str.trim()
 let hold = str
    
 let brackets = {
  '(':')',
  '{':'}',
  '[':']',
  '<':'>'
 }

 let expectToClose = [];
 let remove = 0;

 for (let char of str) {
  if (brackets[char]) {
   expectToClose.push(brackets[char])
  } else {
   let end = expectToClose.pop()
   if (end !== char ) {
     corruptedChars[char]++
     remove = 1;
     return
   } 
  }
 }
 if (remove === 0) {
  filteredLines.push(hold)
 }
}

input.forEach(line => validLine(line))

console.log('filteredLines', filteredLines)
console.log('corruptedChars', corruptedChars)

const getScore = corruptedChars => {

 let pointsArr = []

 for (let char in corruptedChars) {
  if (char === ')') {
   pointsArr.push(corruptedChars[char] * 3)
  }
  if (char === ']') {
   pointsArr.push(corruptedChars[char] * 57)
  }
  if (char === '}') {
   pointsArr.push(corruptedChars[char] * 1197)
  }
  if (char === '>') {
   pointsArr.push(corruptedChars[char] * 25137)
  }
 }
 
 return pointsArr.reduce((a,b) => a + b)
}

console.log(getScore(corruptedChars))