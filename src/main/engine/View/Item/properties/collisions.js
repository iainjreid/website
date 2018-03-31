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
    // constructor () {
    //   super(...arguments)
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
  const collisions = []

  for (let i1 = 0, n = updates.length; i1 < n; i1++) {
    for (let i2 = i1 + 1; i2 < n; i2++) {
      const entity1 = updates[i1]
      const entity2 = updates[i2]

      const e1radius = entity1.getWidth() / 2
      const e2radius = entity2.getWidth() / 2

      const { dx: e1dx, dy: e1dy } = entity1.getCenterCoordinates()
      const { dx: e2dx, dy: e2dy } = entity2.getCenterCoordinates()

      if (Platform.utils.pythagoras(e2dx - e1dx, e2dy - e1dy) < e1radius + e2radius) {
        collisions[collisions.length] = [entity1, entity2]
      }
    }
  }

  while (collisions.length) {
    Platform.hooks.fire('collision', collisions.shift())
  }

  updates.length = 0
}, Infinity)
