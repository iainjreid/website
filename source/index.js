'use strict'

import { Platform, View } from './engine'

class Ball extends View.Item.with('vectors', 'collisions') {
  constructor () {
    // Set a random position
    super(Platform.utils.randomNumberBetween(60, window.innerWidth - 60), Platform.utils.randomNumberBetween(60, window.innerHeight - 60), 12, 12)

    this.color = Platform.utils.randomColorHex()

    // Set a random trajectory
    this.setVectorX(Platform.utils.randomNumberBetween(-5, 5))
    this.setVectorY(Platform.utils.randomNumberBetween(-5, 5))
  }

  draw (ctx) {
    ctx.beginPath()
    ctx.arc(6, 6, 6, Math.PI * 2, false)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()
  }
}

const layer = View.createLayer()

for (let i = 0; i < 50; i++) {
  setTimeout(() => layer.addEntity(new Ball()), i * 100)
}

Platform.hooks.on('collision', (item1, item2) => {
  item1.reflectVectorX(item2)
  item1.reflectVectorY(item2)
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
    let { dx: ballX, dy: ballY } = ball.getCoordinates()
    let [vectorX, vectorY] = [ball.getVectorX(), ball.getVectorY()]

    if (ballX + vectorX + ball.getWidth() > layer.getWidth() || ballX + vectorX <= 0) {
      ball.reverseVectorX()
    }

    if (ballY + vectorY + ball.getHeight() > layer.getHeight() || ballY + vectorY <= 0) {
      ball.reverseVectorY()
    }
  }
})

Platform.loop.start()
