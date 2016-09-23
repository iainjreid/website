'use strict'

class ViewLayer {
  constructor (width, height) {
    this._canvas = document.getElementById('viewCanvas')
    this._ctx = this._canvas.getContext('2d')

    // Resize the canvas by default
    return this.resizeCanvas(width, height)
  }

  getWidth () {
    return this._canvas.width
  }

  getHeight () {
    return this._canvas.height
  }

  lockBoundaries () {
    this._boundariesLocked = true
  }

  clearCanvas () {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height)
  }

  resizeCanvas (width, height) {
    // Ensure that the Layer boundaries are not locked
    if (this._boundariesLocked) {
      throw Error('Cannot resize canvas when boundaries are locked')
    }

    this._canvas.width = width || window.innerWidth
    this._canvas.height = height || window.innerHeight
  }
}

export { ViewLayer as Layer }
