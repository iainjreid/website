'use strict'

// Dependencies
import { Platform } from '../../../Platform'

export function vectors (superclass) {
  return class Vectors extends superclass {
    constructor () {
      super(...arguments)

      this.vectorX = 0
      this.vectorY = 0

      Platform.loop.add(() => {
        const {dx: ballX, dy: ballY} = this.getCoordinates()

        this.setCoordinates({
          dx: ballX + this.vectorX,
          dy: ballY + this.vectorY
        })
      })
    }

    /**
     * @description This method will return the horizontal value of the Vector.
     *
     * @returns {Number} The Vectors X axis value
     */
    getVectorX () {
      return this.vectorX
    }

    /**
     * @description This method will set the horizontal value of the Vector to the value supplied.
     */
    setVectorX (x) {
      this.vectorX = x
    }

    /**
     * @description This method will return the vertical value of the Vector.
     *
     * @returns {Number} The Vectors Y axis value
     */
    getVectorY () {
      return this.vectorY
    }

    /**
     * @description This method will set the vertical value of the Vector to the value supplied.
     */
    setVectorY (y) {
      this.vectorY = y
    }

    /**
     * @description This method will reverse the X and Y values of the Vector.
     */
    reverseVector () {
      this.vectorX = -this.vectorX
      this.vectorY = -this.vectorY
    }

    /**
     * @description This method will reverse the X value of the Vector.
     */
    reverseVectorX () {
      this.vectorX = -this.vectorX
    }

    /**
     * @description This method will reverse the Y value of the Vector.
     */
    reverseVectorY () {
      this.vectorY = -this.vectorY
    }

    /**
     * @description This method will swap the X and Y values of the supplied Vector with this Vector.
     *
     * @param {Object} item - The Vector to switch the X and Y values with
     */
    reflectVector (item) {
      // Ensure that the Item is valid
      if (!(item instanceof Vectors)) {
        throw Error('Item must include the Vector class')
      }

      this.vectorX = [item.vectorX, item.vectorX = this.vectorX][0]
      this.vectorY = [item.vectorY, item.vectorY = this.vectorY][0]
    }

    /**
     * @description This method will swap the X value of the supplied Vector with this Vector.
     *
     * @param {Object} item - The Vector to switch the X value with
     */
    reflectVectorX (item) {
      // Ensure that the Item is valid
      if (!(item instanceof Vectors)) {
        throw Error('Item must include the Vector class')
      }

      this.vectorX = [item.vectorX, item.vectorX = this.vectorX][0]
    }

    /**
     * @description This method will swap the Y value of the supplied Vector with this Vector.
     *
     * @param {Object} item - The Vector to switch the Y value with
     */
    reflectVectorY (item) {
      // Ensure that the Item is valid
      if (!(item instanceof Vectors)) {
        throw Error('Item must include the Vector class')
      }

      this.vectorY = [item.vectorY, item.vectorY = this.vectorY][0]
    }

    /**
     * @description This method will return the magnitude of the Vector.
     *
     * @returns {Number} The magnitude of the Vector
     */
    getVectorMagnitude () {
      return Platform.utils.pythagoras(this.vectorX, this.vectorY)
    }

    /**
     * @description This method will return the angle of direction for the Vector.
     *
     * @returns {Number} The angle of direction of the Vector
     */
    getVectorDirection () {
      const itemCenterCoordinates = super.getCenterCoordinates()

      return Platform.utils.getAngleBetweenThreePoints({
        dx: itemCenterCoordinates.dx,
        dy: itemCenterCoordinates.dy + 1
      }, itemCenterCoordinates, {
        dx: itemCenterCoordinates.dx + this.vectorX,
        dy: itemCenterCoordinates.dy + this.vectorY
      })
    }
  }
}
