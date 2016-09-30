'use strict'

class Item {
  constructor (dx, dy, width, height, canvas) {
    this._canvas = canvas || document.createElement('canvas')
    this._ctx = this._canvas.getContext('2d')

    // Set the canvas width and height
    if (!canvas) {
      this._canvas.width = this._width = width
      this._canvas.height = this._height = height
    }

    // Store a reference to the draw function and other metadata
    this.dx = dx
    this.dy = dy
  }

  /**
   * @description This method will return a reference to the canvas element belonging to the Entity.
   *
   * @return {Object} The canvas belonging to the Entity
   */
  getCanvas () {
    return this._canvas
  }

  /**
   * @description This method will return a reference to the context derived from the canvas element belonging to the
   *              Entity.
   *
   * @return {Object} The canvas context belonging to this Entity
   */
  getContext () {
    return this._ctx
  }

  getWidth () {
    return this._width
  }

  getHeight () {
    return this._height
  }

  getRadius () {
    return this._width / 2
  }

  getCoordinates () {
    return {
      dx: this.dx,
      dy: this.dy
    }
  }

  setCoordinates ({dx, dy}) {
    this.dx = dx
    this.dy = dy
  }

  getDxCoordinate () {
    return this.dx
  }

  setDxCoordinate (dx) {
    this.dx = dx
  }

  getDyCoordinate () {
    return this.dy
  }

  setDyCoordinate (dy) {
    this.dy = dy
  }

  getCenterCoorindinates () {
    return {
      dx: this.dx + this._width / 2,
      dy: this.dy + this._height / 2
    }
  }

  getHorizontalCenterCoordinate () {
    return this.dx + this._width / 2
  }

  getVerticalCenterCoordinate () {
    return this.dy + this._height / 2
  }

  getMinHorizontalCoordinate () {
    return this.dx
  }

  getMaxHorizontalCoordinate () {
    return this.dx + this._width
  }

  getMinVerticalCoordinate () {
    return this.dy
  }

  getMaxVerticalCoordinate () {
    return this._dy + this._height
  }

  /**
   * @description A getter to return the Item class function.
   *
   * @returns {Function} A reference to the Item class
   */
  get Class () {
    return Item
  }
}

export { Item }
