'use strict'

const Input = {
  upArrow: false,
  downArrow: false,
  leftArrow: false,
  rightArrow: false
}

document.addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 38:
    case 87:
      Input.upArrow = true
      break
    case 40:
    case 83:
      Input.downArrow = true
      break
    case 37:
    case 65:
      Input.leftArrow = true
      break
    case 39:
    case 68:
      Input.rightArrow = true
      break
  }
}, false)

document.addEventListener('keyup', e => {
  switch (e.keyCode) {
    case 38:
    case 87:
      Input.upArrow = false
      break
    case 40:
    case 83:
      Input.downArrow = false
      break
    case 37:
    case 65:
      Input.leftArrow = false
      break
    case 39:
    case 68:
      Input.rightArrow = false
      break
  }
}, false)

export { Input }
