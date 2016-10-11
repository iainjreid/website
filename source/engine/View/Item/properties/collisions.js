'use strict'

// Dependencies
import { Platform } from '../../../Platform'

const updates = []

function collisions (superclass) {
  return class Collisions extends superclass {
    setCoordinates (coordinates) {
      updates.push({
        tick: (coordinates) => {
          super.setCoordinates(coordinates)
        },
        vector: coordinates
      })
    }
  }
}

Platform.loop.add(() => {
  let update

  while (updates.length) {
    update = updates.shift()
    update.tick(update.vector)
  }
}, 100)

export { collisions }
