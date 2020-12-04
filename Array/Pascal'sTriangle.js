// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let answer = []
  for (let i = 0; i < numRows; i++) {
    answer[i] = []
    if (i < 1) {
      answer[i].push(1)
    } else {
      answer[i].length = i + 1 - 2
      answer[i].unshift(1)
      answer[i].push(1)
    }
  }
  for (let i = 0; i < answer.length; i++) {
    for(let insideIndex = 0; insideIndex < answer[i].length; insideIndex++) {
      if (i <= 1) continue
      if (insideIndex === 0) continue
      if (!answer[i][insideIndex]) {
        answer[i][insideIndex] = answer[i-1][insideIndex-1] + answer[i-1][insideIndex]
      }
    }
  }
  console.log(answer)
};
generate(8)