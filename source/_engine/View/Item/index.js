'use strict'

class Item {
  constructor (width, height) {
    this._canvas = document.createElement('canvas')
    this._ctx = this._canvas.getContext('2d')

    // Set the canvas width and height
    this._canvas.width = this._width = width
    this._canvas.height = this._height = height
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
