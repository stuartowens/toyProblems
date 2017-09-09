// Write a function that rotates a NxN matrix 90 degrees clockwise.
// A matrix, also called a 2-D array, is simply an array of arrays of values.
//
// 2x2 MATRIX EXAMPLE:
//
// [ [1, 2],
// [3, 4] ]
//
// Rotated:
//
// [ [3, 1],
// [4, 2] ]
//
// 4x4 MATRIX EXAMPLE:
//
// [ [ 1, 2, 3, 4],
// [ 5, 6, 7, 8],
// [ 9, “A”,”B”,”C”],
// [“D”,”E”,”F”,”G”] ]
//
// Rotated:
//
// [ [“D”, 9, 5, 1],
// [“E”, “A”, 6, 2],
// [“F”,”B”, 7, 3],
// [“G”,”C”, 8, 4] ]

function rotateMatrix (matrix) {
  var ans =[]
  for (let i = 0; i < matrix.length; i++) {
    ans.push([])
  }
  // matrix = matrix.join('')
  for (let i = 0; i < matrix.length; i++ ) {
    for (let j = 0; j < matrix.length; j++) {
      ans[j].unshift(matrix[i][j])
    }
  }
  return ans
}
