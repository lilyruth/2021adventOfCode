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

let input = digitInput.replace(/^.*\| /gm, '').replace(/\n/g, ' ').split(' ')

let uniqueDigits = input.filter(item => item.length === 2 || item.length === 3 || item.length === 4 || item.length === 7)

console.log(uniqueDigits, uniqueDigits.length)



// 0 has 6 unique segments
// 1 has 2 unique segments
// 2 has 5 unique segments
// 3 has 5 unique segments 
// 4 has 4 unique segments
// 5 has 5 unique segments
// 6 has 6 unique segments
// 7 has 3 unique segments
// 8 has 7 unique segments (all of them)

// gb is 1
// dab is 7
// eafb is 4
// acedgfb is 8