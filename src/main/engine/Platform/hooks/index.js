'use strict'

const hooks = {}

/**
 * @description This method will register a listener for the provided "hookName".
 *
 * @param {String}   hookName - The name of the hook
 * @param {Function} fn       - The function to be called
 */
export function on (hookName, fn) {
  if (hooks.hasOwnProperty(hookName)) {
    hooks[hookName].push(fn)
  } else {
    hooks[hookName] = [fn]
  }
}

/**
 * @description This method will execute any registered listeners for the provided "hookName".
 *
 * @param {String} hookName - The name of the hook
 * @param {Any[]}  args     - The arguments to be passed
 */
export function fire (hookName, args) {
  if (!hooks.hasOwnProperty(hookName)) {
    return
  }

  for (let fn of hooks[hookName]) {
    fn(...args)
  }
}
