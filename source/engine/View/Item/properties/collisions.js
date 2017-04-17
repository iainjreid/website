'use strict'

// Dependencies
import { Platform } from '../../../Platform'

const updates = []

export function collisions (superclass) {
  return class Collisions extends superclass {
    /**
     * @todo Add items with collisions to separate list, and then check moving items against that list, thereby
     *       allowing stationary items to recieve collision detection too.
     */
    // constructor (...args) {
    //   super(...args)
    // }

    setDxCoordinate (...args) {
      if (!updates.includes(this)) {
        updates.push(this)
      }

      super.setDxCoordinate(...args)
    }

    setDyCoordinate (...args) {
      if (!updates.includes(this)) {
        updates.push(this)
      }

      super.setDyCoordinate(...args)
    }
  }
}

Platform.loop.add(() => {
  while (updates.length) {
    Platform.hooks.fire('collision', updates.shift())
  }

  updates.length = 0
}, 100)
