function largestProductOfThree (array) {
  poss = []
  largest = -122020202020;
  large = {}
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      for(let k = 0; k < array.length; k++) {
        // console.log(i)
        if(j !== k && j !== i && i !== k ) {
          console.log('getting here')
          poss.push([array[j] , array[k], array[i]])
        }
      }
    }
  }
  for(let i = 0; i < poss.length; i++) {
    var temp = poss[i][0] * poss[i][1] * poss[i][2]
    if (temp > largest) {
      largest = temp
    }
  }

  return largest
}
