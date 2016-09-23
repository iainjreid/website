'use strict'

import { Game } from '../engine'

export let ball = new Game.objects.Item(ctx => {
  ctx.beginPath()
  ctx.arc(30, 30, 30, Math.PI * 2, false)
  ctx.fillStyle = '#FF0000'
  ctx.fill()
  ctx.closePath()
}, 60, 60)
