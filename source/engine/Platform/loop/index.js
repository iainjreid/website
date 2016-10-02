'use strict'

// Dependencies
import { config } from '../config'

/**
 * @description The loop maintains a consistant frame-rate throughout the lifecycle of the application.
 */
const loop = {}
let tasks = []
let shouldRun

/**
 * @description This method will add the supplied function to the processing cycle.
 *
 * @param {Function} fn - The function to add to the processing cycle
 *
 * @returns {Object} The loop object
 */
loop.add = (fn) => {
  // Ensure that a function has been provided
  if (typeof fn !== 'function') {
    throw Error('Only functions may be added to the loop')
  }

  tasks.push(fn)

  // Return the Loop object
  return loop
}

/**
 * @description This method will start the processing cycle.
 *
 * @returns {Object} The loop object
 */
loop.start = () => {
  shouldRun = true
  window.requestAnimationFrame(process)

  // Return the Loop object
  return loop
}

/**
 * @description This method will stop the processing cycle.
 *
 * @returns {Object} The loop object
 */
loop.stop = () => {
  shouldRun = false

  // Return the loop object
  return loop
}

let t0, t1
function process () {
  if (!shouldRun) {
    return
  }

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

  window.requestAnimationFrame(process)
}

window.onerror = loop.stop

export { loop }
