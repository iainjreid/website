'use strict'

let upArrow = false
let downArrow = false
let leftArrow = false
let rightArrow = false

document.addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 38:
    case 87:
      upArrow = true
      break
    case 40:
    case 83:
      downArrow = true
      break
    case 37:
    case 65:
      leftArrow = true
      break
    case 39:
    case 68:
      rightArrow = true
      break
  }
}, false)

document.addEventListener('keyup', e => {
  switch (e.keyCode) {
    case 38:
    case 87:
      upArrow = true
      break
    case 40:
    case 83:
      downArrow = true
      break
    case 37:
    case 65:
      leftArrow = false
      break
    case 39:
    case 68:
      rightArrow = false
      break
  }
}, false)

export let Input = { upArrow, downArrow, leftArrow, rightArrow }
