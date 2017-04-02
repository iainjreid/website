'use strict'

// Temp draft!

// Dependencies
import { Platform } from '../../Platform'
import { Layer } from '../../View/Layer'
import { Base } from './base'

export class Sprite extends Base {
  constructor (spritesheet, width, height, frames) {
    super()

    // Store a reference to the spritesheet and its metadata
    const img = new Image()
    img.src = spritesheet
    img.onload = () => {
      this._spritesheet = img
      this._width = width
      this._height = height
      this._frame = 0
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
      layer._ctx.strokeRect(this._coordinates.x, this._coordinates.y, this._width, this._height)
      layer._ctx.closePath()
    }

    layer._ctx.drawImage(this._spritesheet, ...this.animation())
  }

  animation () {
    this._frame = this._frame < this._frames ? this._frame + 1 : 1

    return [
      this._width * (this._frame - 1),
      0,
      this._width,
      this._height,
      this._coordinates.x,
      this._coordinates.y,
      this._width,
      this._height
    ]
  }
}
