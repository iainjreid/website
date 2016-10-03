'use strict'

// Dependencies
import { Platform } from '../../../Platform'

function vectors (superclass) {
  return class Vectors extends superclass {
    getVectorX () {
      return this.vectorX
    }

    setVectorX (x) {
      this.vectorX = x
    }

    getVectorY () {
      return this.vectorY
    }

    setVectorY (y) {
      this.vectorY = y
    }

    getVectorMagnitude () {
      return Math.sqrt(Math.pow(this.vectorX, 2), Math.pow(this.vectorY, 2))
    }

    getVectorDirection () {
      Platform.utils.getAngleBetweenThreePoints(// todo)
    }
  }
}

export { vectors }
