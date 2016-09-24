'use strict'

class Base {
  constructor () {
    this._canvas = document.createElement('canvas')
    this._ctx = this._canvas.getContext('2d')
  }
}

export { Base }
