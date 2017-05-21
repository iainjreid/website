'use strict'

import { Platform, View } from './engine'

class Ball extends View.Item.with('vectors', 'gravity', 'collisions') {
  constructor () {
    // Set a random position
    super(Platform.utils.randomNumberBetween(60, window.innerWidth - 60), 700, 12, 12)

    // this.color = Platform.utils.randomColorHex()
    this.color = '000'

    // Set a random trajectory
    // this.setVectorX(Platform.utils.randomNumberBetween(-5, 5))
  }

  draw (ctx) {
    const radius = this.getWidth() / 2

    ctx.beginPath()
    ctx.arc(radius, radius, radius, Math.PI * 2, false)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()
  }
}

const layer = View.createLayer()

for (let i = 0; i < 1; i++) {
  layer.addEntity(new Ball())
}

Platform.hooks.on('collision', (item1, item2) => {
  // item1.reflectVectorX(item2)
  // item1.reflectVectorY(item2)
})

Platform.loop.add(() => {
  const entities = layer.getEntities()

  // Loop through the entities
  let ball
  let i = 0
  let n = entities.length

  for (; i < n;) {
    ball = entities[i++]

    // Ball Controls
    let { dx, dy } = ball.getCoordinates()
    let [vectorX, vectorY] = [ball.getVectorX(), ball.getVectorY()]

    if (dx + vectorX + ball.getWidth() >= layer.getWidth() || dx + vectorX <= 0) {
      ball.reverseVectorX()
    }

    if (dy + vectorY + ball.getHeight() >= layer.getHeight() || dy + vectorY <= 0) {
      ball.reverseVectorY(layer.getHeight() - dy + vectorY + ball.getHeight())
    }
  }
})

Platform.loop.start()
