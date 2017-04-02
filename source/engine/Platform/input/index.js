'use strict'

export const keyboard = {
  upArrow: false,
  downArrow: false,
  leftArrow: false,
  rightArrow: false
}

document.addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 38:
    case 87:
      keyboard.upArrow = true
      break
    case 40:
    case 83:
      keyboard.downArrow = true
      break
    case 37:
    case 65:
      keyboard.leftArrow = true
      break
    case 39:
    case 68:
      keyboard.rightArrow = true
      break
  }
}, false)

document.addEventListener('keyup', e => {
  switch (e.keyCode) {
    case 38:
    case 87:
      keyboard.upArrow = false
      break
    case 40:
    case 83:
      keyboard.downArrow = false
      break
    case 37:
    case 65:
      keyboard.leftArrow = false
      break
    case 39:
    case 68:
      keyboard.rightArrow = false
      break
  }
}, false)
