'use strict'

// Dependencies
import { Base } from '../../Entities/classes'

class Layer {
  constructor (uid, width, height) {
    // Ensure that the unique identifier is valid
    if (typeof uid !== 'string') {
      throw Error('The UID must be a string')
    }

    this._uid = uid

    // Create the canvas objects
    this._canvas = document.createElement('canvas')
    this._ctx = this._canvas.getContext('2d')

    // Resize the canvas
    return this.resizeCanvas(width, height)
  }

  /**
   * @description This method will return this unique identifier assigned to the Layer.
   *
   * @return {String} The unique identifier assigned to the Layer
   */
  getUid () {
    return this._uid
  }

  /**
   * @description This method will return a reference to the canvas element belonging to the Layer.
   *
   * @return {Object} The canvas belonging to the Layer
   */
  getCanvas () {
    return this._canvas
  }

  /**
   * @description This method will return a reference to the context derived from the canvas element belonging to the
   *              Layer.
   *
   * @return {Object} The canvas context belonging to this Layer
   */
  getContext () {
    return this._ctx
  }

  /**
   * @description This method will return the visible width of the Layer.
   *
   * @returns {Number} The width of the Layer
   */
  getWidth () {
    return this._canvas.width
  }

  /**
   * @description This method will return the visible height of the Layer.
   *
   * @returns {Number} The height of the Layer
   */
  getHeight () {
    return this._canvas.height
  }

  addEntity (entity, dx, dy) {
    // Ensure that the entity is valid
    if (!(entity instanceof Base)) {
      throw Error('Entities must be valid')
    }

    return this._ctx.drawImage(entity, dx, dy)
  }

  /**
   * @description This method will lock the boundaries of the Layer, preventing any further manual or automatic resizing
   *              of the Layer.
   */
  lockBoundaries () {
    this._boundariesLocked = true
  }

  /**
   * @description This method will completely clear the canvas.
   */
  clearCanvas () {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height)
  }

  /**
   * @description This method will resize the canvas using the supplied width and height values. If no width or height
   *              value is supplied the window width or height will be used instead.
   *
   * @param {Number=} width  - The desired width to be set
   * @param {Number=} height - The desired height to be set
   */
  resizeCanvas (width, height) {
    // Ensure that the Layer boundaries are not locked
    if (this._boundariesLocked) {
      throw Error('Cannot resize canvas when boundaries are locked')
    }

    this._canvas.width = this._width = width || window.innerWidth
    this._canvas.height = this._height = height || window.innerHeight
  }
}

export { Layer }
