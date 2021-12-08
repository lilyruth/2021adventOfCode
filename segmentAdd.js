import digitInput from './digitInput.mjs';

let example = `be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe
edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc
fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg
fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb
aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea
fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb
dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe
bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef
egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb
gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce`

let input = digitInput.split('\n')

// let uniqueDigits = input.filter(item => item.length === 2 || item.length === 3 || item.length === 4 || item.length === 7)

for (let i = 0; i < input.length; i++) {
 input[i] = input[i].replace(/\s/g, ',').replace(/\|,/g,'').split(',')
}
console.log(input)
let digitKey = {}

let decodedDigitsArray = [];

const getUnique = str => {
 if (str.length === 2) {
  digitKey.one = str

 } else if (str.length === 3) {
  digitKey.seven = str
 
 } else if (str.length === 4) {
  digitKey.four = str
 
 } else if (str.length === 7) {
  digitKey.eight = str
 
 }
 return digitKey
}

const decode = str => {

 if (str.length === 2) {

  return '1'
 } else if (str.length === 3) {
 
  return '7'
 } else if (str.length === 4) {
  
  return '4'
 } else if (str.length === 7) {

  return '8'
 } else if (str.length === 6) {
   if (Array.from(new Set(str + digitKey.four)).length === 6) {
  
    digitKey.six = str
    return '9'
   } else if (Array.from(new Set(str + digitKey.one)).length === 6) {

    digitKey.zero = str
    return '0'
   } else {
    digitKey.nine = str
    return '6'
   }
 } else if (str.length === 5) {
  if (Array.from(new Set(str + digitKey.one)).length === 5) {
   digitKey.three = str
   return '3'
  } else if (Array.from(new Set(str + digitKey.four)).length === 7) {
   digitKey.two = str
   return '2'
  } else {
   digitKey.five = str
   return '5'
  }
 }
}


const runDecode = (numKey, digits) => {
 let numArray = []
 numKey.forEach(str => getUnique(str))
 digits.forEach(str => {
  let num = decode(str)
  numArray.push(num)
 })
 let decodedNumber = +numArray.join('')
 decodedDigitsArray.push(decodedNumber)
}
input.forEach(line => runDecode(line.slice(0,10), line.slice(10)))

let answer = decodedDigitsArray.reduce((a,b) => a+b)

console.log(answer)