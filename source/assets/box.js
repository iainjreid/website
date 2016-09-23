'use strict'

import { Game } from '../engine'

export let box = new Game.Item(ctx => {
  ctx.beginPath()
  ctx.rect(0, 0, 40, 40)
  ctx.fillStyle = '#000'
  ctx.fill()
  ctx.closePath()
}, 40, 40)
