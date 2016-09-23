'use strict'

// Dependencies
import { Platform } from '../../Platform'
import { Layer } from '../../View/Layer'
import { Base } from './base'

class GameSprite extends Base {
  constructor (spritesheet, width, height, frames) {
    super()

    this._canvas = document.createElement('canvas')
    this._ctx = this._canvas.getContext('2d')

    // Update the width and height of the canvas
    this._canvas.width = width
    this._canvas.height = height

    // Store a reference to the spritesheet and its metadata
    const img = new Image()
    img.src = spritesheet
    img.onload = () => {
      this._spritesheet = img
      this._frames = frames
    }
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

    layer._ctx.drawImage(this._spritesheet, this._coordinates.x, this._coordinates.y)
  }
}

export { GameSprite as Sprite }
