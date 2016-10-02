'use strict'

const input = {
  upArrow: false,
  downArrow: false,
  leftArrow: false,
  rightArrow: false
}

document.addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 38:
    case 87:
      input.upArrow = true
      break
    case 40:
    case 83:
      input.downArrow = true
      break
    case 37:
    case 65:
      input.leftArrow = true
      break
    case 39:
    case 68:
      input.rightArrow = true
      break
  }
}, false)

document.addEventListener('keyup', e => {
  switch (e.keyCode) {
    case 38:
    case 87:
      input.upArrow = false
      break
    case 40:
    case 83:
      input.downArrow = false
      break
    case 37:
    case 65:
      input.leftArrow = false
      break
    case 39:
    case 68:
      input.rightArrow = false
      break
  }
}, false)

export { input }
