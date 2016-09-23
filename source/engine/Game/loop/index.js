'use strict'

// Dependencies
import { Platform } from '../../Platform'

let tasks = []
let intervalId

function add (fn) {
  // Ensure that a function has been provided
  if (typeof fn !== 'function') {
    throw Error('Only functions may be added to the loop')
  }

  tasks.push(fn)
}

function start () {
  intervalId = setInterval(() => {
    let i = 0
    let n = tasks.length

    while (i < n) {
      tasks[i++]()
    }
  }, 1000 / Platform.config.targetFps)
}

function stop () {
  clearInterval(intervalId)
}

window.onerror = stop

export const loop = { add, start, stop }
