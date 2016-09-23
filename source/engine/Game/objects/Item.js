'use strict'

// Dependencies
import { Platform } from '../../Platform'
import { Layer } from '../../View/Layer'
import { Base } from './base'

class GameItem extends Base {
  constructor (draw, width, height) {
    super()

    this._canvas = document.createElement('canvas')
    this._ctx = this._canvas.getContext('2d')

    // Update the width and height of the canvas
    this._canvas.width = width
    this._canvas.height = height

    // Draw the object
    draw(this._ctx)
  }

  draw (layer) {
    // Ensure that the layer supplied is valid
    if (!(layer instanceof Layer)) {
      throw Error('Only valid Layers may be drawn upon')
    }

    // Ensure the coordinates have been specified
    if (!this._coordinates) {
      throw Error('No coordinates have been specified')
    }

    if (Platform.config.debugEnabled) {
      // Draw a boundry box
      layer._ctx.beginPath()
      layer._ctx.strokeRect(this._coordinates.x, this._coordinates.y, this._ctx.canvas.width, this._ctx.canvas.height)
      layer._ctx.closePath()
    }

    layer._ctx.drawImage(this._ctx.canvas, this._coordinates.x, this._coordinates.y)
  }
}

export { GameItem as Item }
