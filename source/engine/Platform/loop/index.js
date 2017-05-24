'use strict'

// Dependencies
import * as config from '../config'

/**
 * @description The loop maintains a consistant frame-rate throughout the lifecycle of the application.
 */

let tasks = []
let shouldRun
let fpsCounter = 0
let fpsDuration = 0

/**
 * @description This method will add the supplied function to the processing cycle.
 *
 * @param {Function} fn - The function to add to the processing cycle
 *
 * @returns {Object} The loop object
 */
export function add (fn, priority = 60) {
  // Ensure that a function has been provided
  if (typeof fn !== 'function') {
    throw Error('Only functions may be added to the loop')
  }

  tasks.push({ fn, priority })

  // Sort the task by priority
  tasks = tasks.sort((a, b) => a.priority < b.priority)
}

/**
 * @description This method will start the processing cycle.
 *
 * @returns {Object} The loop object
 */
export function start () {
  shouldRun = true
  window.requestAnimationFrame(process)
}

/**
 * @description This method will stop the processing cycle.
 *
 * @returns {Object} The loop object
 */
export function stop () {
  shouldRun = false
}

let i, n
function process () {
  if (!shouldRun) {
    return
  }

  // FPS Details
  if (config.fpsDetails) {
    fpsDuration -= performance.now()
  }

  i = 0
  n = tasks.length
  while (i < n) {
    tasks[i++].fn()
  }

  // FPS Details
  if (config.fpsDetails) {
    fpsCounter++
    fpsDuration += performance.now()
  }

  window.requestAnimationFrame(process)
}

window.onerror = stop

// FPS Details
if (config.fpsDetails) {
  let startTime = performance.now()
  let totalTime

  setInterval(() => {
    totalTime = performance.now() - startTime
    fpsCounter = fpsCounter / 1000 * totalTime
    fpsDuration = fpsDuration / 1000 * totalTime

    console.debug('%s FPS', roundNumber(fpsCounter))
    console.debug('- Actual duration: %sms', roundNumber(totalTime))
    console.debug('- Time spent processing: %sms', roundNumber(fpsDuration))
    console.debug('- Average tick duration: %sms', roundNumber(fpsDuration / fpsCounter))
    console.debug('- Average frame duration: %sms', roundNumber(totalTime / fpsCounter))
    console.debug('- Processing utilisation: %s%', roundNumber(fpsDuration / totalTime * 100))

    startTime = performance.now()
    fpsCounter = 0
    fpsDuration = 0
  }, 1000)
}

function roundNumber (number) {
  return Math.round(number * 1000) / 1000
}
