'use strict'

let intervalId

window.onerror = () => {
  // Clear the interval
  clearInterval(intervalId)
}

export let loop = (fn) => {
  intervalId = setInterval(() => {
    console.log('tick')
    fn()
  }, 1000 / 60)
}

export { Input } from './Input'
export { Game } from './Game'
export { Util } from './Util'
export { View } from './View'
