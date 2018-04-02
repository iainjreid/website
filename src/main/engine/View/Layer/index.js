'use strict'

// Dependencies
import { Item } from '../Item'
import { Platform } from '../../Platform'

export class Layer {
  constructor (width, height) {
    // Create the canvas objects
    this._canvas = document.createElement('canvas')
    this._ctx = this._canvas.getContext('2d')

    // Initialise the entities
    this._entities = []

    // Resize the canvas and append it to the DOM
    this.resizeCanvas(width, height)
    document.body.appendChild(this._canvas)

    // Add a loop task
    Platform.loop.add(this.renderLayer, Infinity, this)
  }

  /**
   * @description This method will return a reference to the canvas element belonging to the Layer.
   *
   * @returns {Object} The canvas belonging to the Layer
   */
  getCanvas () {
    return this._canvas
  }

  /**
   * @description This method will return a reference to the context derived from the canvas element belonging to the
   *              Layer.
   *
   * @returns {Object} The canvas context belonging to this Layer
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

  addEntity (entity) {
    // Ensure that the entity is valid
    if (!(entity instanceof Item)) {
      throw Error('Entities must be valid')
    }

    // Draw the entity if possible
    if (entity.draw) {
      entity.draw(entity._ctx)
    }

    // Add the entities to the layer
    return (this._entities[this._entities.length] = entity)
  }

  getEntities () {
    return this._entities
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

  renderLayer () {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height)

    for (let entity of this._entities) {
      const canvas = entity.getCanvas()
      const { dx: entityX, dy: entityY } = entity.getCoordinates()

      // Draw a boundry box if enabled
      if (Platform.config.boundryBoxEnabled) {
        entity._ctx.strokeRect(0, 0, canvas.width, canvas.height)
      }

      this._ctx.drawImage(canvas, entityX, entityY)
    }
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
