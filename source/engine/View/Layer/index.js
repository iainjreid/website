'use strict'

// Dependencies
import { Item } from '../Item'
import { Platform } from '../../Platform'

class Layer {
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
    Platform.loop.add(() => {
      this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height)

      let entity
      let i = 0
      let n = this._entities.length

      for (; i < n;) {
        entity = this._entities[i++]

        // Clear the relevant part of the layer and redraw the component
        const canvas = entity.getContext().canvas
        const {dx: entityX, dy: entityY} = entity.getCoordinates()

        // Draw a boundry box if in debug mode
        if (Platform.config.debugEnabled) {
          entity._ctx.strokeRect(0, 0, canvas.width, canvas.height)
        }

        this._ctx.drawImage(canvas, entityX, entityY)
      }
    })
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
    this._entities[this._entities.length] = entity

    return this
  }

  getEntities () {
    return this._entities
  }

  getCollisions () {
    const collisions = []

    for (let i1 = 0, n = this._entities.length; i1 < n; i1++) {
      for (let i2 = i1 + 1; i2 < n; i2++) {
        const entity1 = this._entities[i1]
        const entity2 = this._entities[i2]

        const e1radius = entity1.getWidth() / 2
        const e2radius = entity2.getWidth() / 2

        const {dx: e1dx, dy: e1dy} = entity1.getCenterCoordinates()
        const {dx: e2dx, dy: e2dy} = entity2.getCenterCoordinates()

        if (Platform.utils.pythagoras(e2dx - e1dx, e2dy - e1dy) < e1radius + e2radius) {
          collisions[collisions.length] = [entity1, entity2]
        }
      }
    }

    return collisions
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
