'use strict'

function collisions (superclass) {
  return class Collisions extends superclass {
    setCoordinates ({dx, dy}) {
      super.setCoordinates({dx, dy})
    }
  }
}

export { collisions }
