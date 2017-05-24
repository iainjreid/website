'use strict'

// Properties
import { collisions } from './properties/collisions'
import { gravity } from './properties/gravity'
import { resistance } from './properties/resistance'
import { vectors } from './properties/vectors'

export class Item {
  constructor (dx, dy, width, height, canvas) {
    this._canvas = canvas || document.createElement('canvas')
    this._ctx = this._canvas.getContext('2d')

    // Set the canvas width and height
    if (!canvas) {
      this._canvas.width = width
      this._canvas.height = height
    }

    // Store a reference to the draw function and other metadata
    this.dx = dx
    this.dy = dy
  }

  /**
   * @description This method will return a reference to the canvas element belonging to the Item.
   *
   * @returns {Object} The canvas belonging to the Item
   */
  getCanvas () {
    return this._canvas
  }

  /**
   * @description This method will return a reference to the context derived from the canvas element belonging to the
   *              Item.
   *
   * @returns {Object} The canvas context belonging to this Item
   */
  getContext () {
    return this._ctx
  }

  /**
   * @returns {Number} The width of the canvas object
   */
  getWidth () {
    return this._canvas.width
  }

  /**
   * @returns {Number} The height of the canvas object
   */
  getHeight () {
    return this._canvas.height
  }

  /**
   * @returns {Object} The true coordinates of the Item
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
  setCoordinates ({ dx, dy }) {
    this.setDxCoordinate(dx)
    this.setDyCoordinate(dy)
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
      dx: this.dx + this._canvas.width / 2,
      dy: this.dy + this._canvas.height / 2
    }
  }

  getHorizontalCenterCoordinate () {
    return this.dx + this._canvas.width / 2
  }

  getVerticalCenterCoordinate () {
    return this.dy + this._canvas.height / 2
  }

  getMinHorizontalCoordinate () {
    return this.dx
  }

  getMaxHorizontalCoordinate () {
    return this.dx + this._canvas.width
  }

  getMinVerticalCoordinate () {
    return this.dy
  }

  getMaxVerticalCoordinate () {
    return this._dy + this._canvas.height
  }

  /**
   * @description A getter to return the Item class function.
   *
   * @returns {Function} A reference to the Item class
   */
  get Class () {
    return Item
  }

  /**
   * @description This static method attempts to emulate similar functionality to that found in Scala Traits. There are
   *              a limited set of static properties available on this class that can be mixed in with the basic
   *              functionality already available.
   *
   * @param {*} properties
   *
   * @returns {Item} A new Item with extra functionality from the properties specified
   */
  static with (...properties) {
    return properties.reduce((superclass, property) => {
      // Ensure that the property is avaiable on this class if the property is supplied as a string
      if (!Item[property]) {
        throw Error('Property not found on class')
      }

      return Item[property](superclass)
    }, this)
  }

  static get collisions () {
    return collisions
  }

  static get gravity () {
    return gravity
  }

  static get resistance () {
    return resistance
  }

  static get vectors () {
    return vectors
  }
}
