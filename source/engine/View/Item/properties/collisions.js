'use strict'

// Dependencies
import { Platform } from '../../../Platform'

function collisions (superclass) {
  return class Collisions extends superclass {
    constructor () {
      super(...arguments)

      Platform.loop.add(() => {

      })
    }
  }
}

export { collisions }
