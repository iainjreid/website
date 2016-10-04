'use strict'

// Properties
import { vectors } from './properties/vectors'

class Item {
  constructor (dx, dy, width, height) {
    this._canvas = canvas || document.createElement('canvas')
    this._ctx = this._canvas.getContext('2d')

    // Set the canvas width and height
    this._canvas.width = width
    this._canvas.height = height

    // Store a reference to the draw function and other metadata
    this.dx = dx
    this.dy = dy
  }

  /**
   * @description This method will return a reference to the canvas element belonging to the Item.
   *
   * @return {Object} The canvas belonging to the Item
   */
  getCanvas () {
    return this._canvas
  }

  /**
   * @description This method will return a reference to the context derived from the canvas element belonging to the
   *              Item.
   *
   * @return {Object} The canvas context belonging to this Item
   */
  getContext () {
    return this._ctx
  }

  /**
   * @return {Number} The width of the canvas object
   */
  getWidth () {
    return this._canvas.width
  }

  /**
   * @return {Number} The height of the canvas object
   */
  getHeight () {
    return this._canvas.height
  }

  /**
   * @return {Object} The true coordinates of the Item
   */
  getCoordinates () {
    return {
      dx: this.dx,
      dy: this.dy
    }
  }

  /**
   * @description This method will set the coordinates for the Item with the supplied values
   *
   * @param {Object} obj    - The new coordinates of the Item
   * @param {Number} obj.dx - The new X coordinate to be used
   * @param {Number} obj.dy - The new Y coordinate to be used
   */
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

  getCenterCoordinates () {
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

  static with (...properties) {
    return properties.reduce((superclass, property) => {
      // Ensure that the property is avaiable on this class if the property is supplied as a string
      if (!Item[property]) {
        throw Error('Property not found on class')
      }

      return Item[property](superclass)
    }, this)
  }

  static get vectors () {
    return vectors
  }
}

export { Item }
