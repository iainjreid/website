'use strict'

const utils = {}
let uid = 0

/**
 * @description This method will return a unique string.
 *
 * @return {String} The unique string
 */
utils.generateUid = () => {
  return (uid++).toString(36)
}

export { utils }
