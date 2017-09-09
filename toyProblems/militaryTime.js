function toMilitary (time) {
  if (time.length === 5) {
    return time
  }
  var first;
  if (time.length === 6) {
    if(time.split('').splice(4,2).join('') === 'am') {
      time = time.split('').splice(0,4).join('')
      time = '0'.concat(time)
    } else {
      first = time.split('').splice(0,1).join('')
      time = time.split('').splice(1,3).join('')
      first = (Number(first) + 12).toString()
      time = first.concat(time)
    }
  } else {
    if(time.split('').splice(5,2).join('') === 'am' && time.split('').splice(0,2).join('') === '12' ) {
      time = ('00').concat(time.split('').splice(2,3).join(''))
    }
    if(time.split('').splice(5,2).join('') === 'pm' && time.split('').splice(0,2).join('') === '12' ) {
      time = ('12').concat(time.split('').splice(2,3).join(''))
    }
    if(time.split('').splice(5,2).join('') === 'am') {
      time = time.split('').splice(0,5).join('')
    }
    if (time.split('').splice(5,2).join('') === 'pm') {
      first = time.split('').splice(0,2).join('')
      time = time.split('').splice(2,3).join('')
      first = (Number(first) + 12).toString()
      time = first.concat(time)
    }
  }
    return time
}
