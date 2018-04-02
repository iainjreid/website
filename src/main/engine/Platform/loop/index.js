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
export function add (fn, priority = 60, scope) {
  // Ensure that a function has been provided
  if (typeof fn !== 'function') {
    throw Error('Only functions may be added to the loop')
  }

  tasks.push({ fn, priority, scope })

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

function process () {
  if (!shouldRun) {
    return
  }

  // FPS Details
  if (config.fpsDetails) {
    fpsDuration -= performance.now()
  }

  for (let task of tasks) {
    task.fn.call(task.scope)
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
  let stats

  if (config.debugBox) {
    stats = document.body.appendChild(document.createElement('div'))

    stats.style.position = 'absolute'
    stats.style.left = '10px'
    stats.style.bottom = '10px'
    stats.style.background = 'white'
    stats.style.padding = '10px'
  }

  let startTime = performance.now()
  let totalTime

  setInterval(() => {
    totalTime = (performance.now() - startTime) / (config.fpsUpdateFrequency / 1000)
    fpsCounter = fpsCounter / config.fpsUpdateFrequency * totalTime
    fpsDuration = fpsDuration / config.fpsUpdateFrequency * totalTime

    const debugMsg =
      `${roundNumber(fpsCounter)} FPS\n` +
      `- Actual duration: ${roundNumber(totalTime)}ms\n` +
      `- Time spent processing: ${roundNumber(fpsDuration)}ms\n` +
      `- Average tick duration: ${roundNumber(fpsDuration / fpsCounter)}ms\n` +
      `- Average frame duration: ${roundNumber(totalTime / fpsCounter)}ms\n` +
      `- Processing utilisation: ${roundNumber(fpsDuration / totalTime * 100)}%`

    if (config.debugBox) {
      stats.innerHTML = debugMsg
    } else {
      console.debug(debugMsg)
    }

    startTime = performance.now()
    fpsCounter = 0
    fpsDuration = 0
  }, config.fpsUpdateFrequency)
}

function roundNumber (number) {
  return Math.round(number * 1000) / 1000
}
