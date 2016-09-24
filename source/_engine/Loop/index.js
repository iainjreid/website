'use strict'

// Dependencies
import { config } from '../Platform/config'

/**
 * @module Loop
 *
 * @description The Loop maintains a consistant frame-rate throughout the lifecycle of the application.
 */
const Loop = {}
let tasks = []
let intervalId

/**
 * @description This method will add the supplied function to the processing cycle.
 *
 * @param {Function} fn - The function to add to the processing cycle
 */
Loop.add = (fn) => {
  // Ensure that a function has been provided
  if (typeof fn !== 'function') {
    throw Error('Only functions may be added to the loop')
  }

  tasks.push(fn)
}

/**
 * @description This method will start the processing cycle.
 */
Loop.start = () => {
  let t0, t1

  intervalId = setInterval(() => {
    // Performance metrics
    if (config.performanceFeedback) {
      t0 = performance.now()
    }

    let i = 0
    let n = tasks.length

    while (i < n) {
      tasks[i++]()
    }

    // Performance metrics
    if (config.performanceFeedback) {
      t1 = performance.now()
      console.log('Frame took %sms', t1 - t0)
    }
  }, 1000 / config.targetFps)
}

/**
 * @description This method will stop the processing cycle.
 */
Loop.stop = () => {
  clearInterval(intervalId)
}

window.onerror = Loop.stop

export { Loop }
