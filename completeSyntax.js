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

let filteredLines = []

const finishLine = str => {
 
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
     remove = 1;
     return
   } 
  }
 }
 if (remove === 0) {
  filteredLines.push(expectToClose.reverse().join(''))
 }
}

input.forEach(line => finishLine(line))

console.log('filteredLines', filteredLines)

let scoresArr = []

const getScore = line => {

 let score = 0

 for (let i = 0; i < line.length; i++) {
  if (line[i] === ')') {
   score *= 5
   score += 1
  } else if (line[i] === ']') {
   score *= 5
   score += 2
  } else if (line[i] === '}') {
   score *= 5
   score += 3
  } else if (line[i] === '>') {
   score *= 5
   score += 4
  }
 }

 scoresArr.push(score)
}

filteredLines.forEach(line => getScore(line))

let sorted = scoresArr.sort((a,b) => a - b)
let mid = (sorted.length - 1) / 2
console.log(sorted[mid])
