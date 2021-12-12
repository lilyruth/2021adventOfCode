let expected = `8807476555
5089087054
8597889608
8485769600
8700908800
6600088989
6800005943
0000007456
9000000876
8700006848`

let output = [8, 8, 0, 7, 4, 7, 6, 5, 5, 6, 6, 0,
 8, 9, 0, 8, 7, 0, 6, 7, 0, 7, 9, 7,
 8, 8, 9, 6, 0, 0, 0, 8, 9, 5, 7, 6,
 9, 6, 0, 0, 0, 0, 0, 0, 9, 0, 8, 8,
 0, 0, 0, 9, 0, 0, 0, 8, 8, 9, 9, 0,
 9, 9, 0, 0, 0, 0, 5, 9, 5, 5, 0, 0,
 0, 0, 0, 0, 7, 4, 5, 7, 9, 0, 0, 0,
 0, 0, 0, 8, 7, 6, 8, 7, 0, 0, 0, 0,
 6, 8, 4, 8]

let expectedSplit = expected.split('\n').join(',').replace(/,/g, '').split('')

let expectedNums = []
expectedSplit.forEach(num => expectedNums.push(+num))


for (let i = 0; i < expectedNums.length; i++) {
 if (expectedNums[i] !== output[i]) {
  console.log('index ', i, ' expected num', expectedNums[i], 'actual ', output[i])
 } 
}

