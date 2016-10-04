'use strict'

// Dependencies
import { Platform } from '../../../Platform'

function vectors (superclass) {
  return class Vectors extends superclass {
    /**
     * @description This method will return the horizontal value of the vector.
     *
     * @returns {Number} The vectors X axis value
     */
    getVectorX () {
      return this.vectorX
    }

    /**
     * @description This method will set the horizontal value of the vector to the value supplied.
     */
    setVectorX (x) {
      this.vectorX = x
    }

    /**
     * @description This method will return the vertical value of the vector.
     *
     * @returns {Number} The vectors Y axis value
     */
    getVectorY () {
      return this.vectorY
    }

    /**
     * @description This method will set the vertical value of the vector to the value supplied.
     */
    setVectorY (y) {
      this.vectorY = y
    }

    /**
     * @description This method will return the magnitude of the vector.
     *
     * @returns {Number} The magnitude of the vector
     */
    getVectorMagnitude () {
      return Platform.utils.pythagoras(this.vectorX, this.vectorY)
    }

    /**
     * @description This method will return the angle of direction for the vector.
     *
     * @returns {Number} The angle of direction of the vector
     */
    getVectorDirection () {
      const itemCenterCoordinates = super.getCenterCoordinates()

      return Platform.utils.getAngleBetweenThreePoints({
        dx: itemCenterCoordinates.dx,
        dy: itemCenterCoordinates.dy - 1
      }, itemCenterCoordinates, {
        dx: itemCenterCoordinates.dx + this.vectorX,
        dy: itemCenterCoordinates.dy + this.vectorY
      })
    }
  }
}

export { vectors }
