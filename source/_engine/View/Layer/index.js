'use strict'

// Dependencies
import { Base } from '../../Entities/classes'
import { Loop } from '../../Loop'
import { config } from '../../Platform/config'

class Layer {
  constructor (width, height) {
    // Create the canvas objects
    this._canvas = document.createElement('canvas')
    this._ctx = this._canvas.getContext('2d')

    // Resize the canvas and append it to the DOM
    this.resizeCanvas(width, height)
    document.body.appendChild(this._canvas)
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

  addEntity (entity, dx = 0, dy = 0) {
    // Ensure that the entity is valid
    if (!(entity instanceof Base)) {
      throw Error('Entities must be valid')
    }

    Loop.add(() => {
      entity.$draw(entity._ctx)
      this._ctx.drawImage(entity._ctx.canvas, dx, dy)
    })
  }

  /**
   * @description This method will completely clear the canvas.
   */
  clearCanvas () {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height)

    if (config.debugEnabled) {
      // Draw a boundry box
      this._ctx.strokeRect(0, 0, this._canvas.width, this._canvas.height)
    }
  }

  /**
   * @description This method will resize the canvas using the supplied width and height values. If no width or height
   *              value is supplied the window width or height will be used instead.
   *
   * @param {Number=} width  - The desired width to be set, defaults to window.innerWidth
   * @param {Number=} height - The desired height to be set, defaults to window.innerHeight
   */
  resizeCanvas (width = window.innerWidth, height = window.innerHeight) {
    // Ensure that the Layer boundaries are not locked
    if (this._boundariesLocked) {
      throw Error('Cannot resize canvas when boundaries are locked')
    }

    this._canvas.width = this._width = width
    this._canvas.height = this._height = height
  }

  /**
   * @description This method will lock the boundaries of the Layer, preventing any further manual or automatic resizing
   *              of the Layer.
   */
  lockBoundaries () {
    this._boundariesLocked = true
  }

  /**
   * @description This method will unlock the boundaries of the Layer, allowing manual or automatic resizing of the
   *              Layer.
   */
  unlockBoundaries () {
    this._boundariesLocked = false
  }

  /**
   * @description A getter to return the Layer class function.
   *
   * @returns {Function} A reference to the Layer class
   */
  get Class () {
    return Layer
  }
}

export { Layer }
