// Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
// and prints out every value found, but in a spiral from the upper left in to the center.

function spiralTraversal (matrix) {
  var len = matrix.length
  chgLen = matrix[0].length
  answer = []
  while (matrix.length){
    var first = []
    for(let i = 0; i <  matrix.length; i++) {
      if(matrix[i].length===1){
        answer = answer.concat(matrix[i].pop())
      }
      else if (i === 0) {
        answer = answer.concat(matrix[0])
      }else if(i === matrix.length - 1) {
        answer = answer.concat(matrix[matrix.length - 1].reverse())
        answer = answer.concat(first)
      } else {
        var last = matrix[i].pop()
        answer.push(last)
        first.unshift(matrix[i].shift())
      }
    }
    matrix.shift()
    matrix.pop()
  }
  var count = 0
  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i])
    if(answer[i] === undefined){
      count++
    }
  }
  for(let i = 0; i < count; i++){
    answer.pop()
  }
  return answer
}
