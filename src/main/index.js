'use strict'

import { Platform, View } from './engine'

/**
 * @todo Add check to ensure total energy in the view is constant over time.
 */

class Ball extends View.Item.with('vectors', 'gravity', 'resistance') {
  constructor () {
    // Set a random position
    super(Platform.utils.randomNumberBetween(60, window.innerWidth - 100), Platform.utils.randomNumberBetween(60, window.innerHeight - 100), 12, 12)

    this.color = Platform.utils.randomColorHex()

    // Set a random trajectory
    // this.setVectorX(Platform.utils.randomNumberBetween(-3, 3))
    // this.setVectorY(Platform.utils.randomNumberBetween(-3, 3))
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

// const marker = new class extends View.Item {
//   constructor () {
//     super(window.innerWidth / 2, window.innerHeight / 2, 4, 4)
//   }

//   draw (ctx) {
//     const radius = this.getWidth() / 2

//     ctx.beginPath()
//     ctx.arc(radius, radius, radius, Math.PI * 2, false)
//     ctx.fillStyle = '#000'
//     ctx.fill()
//     ctx.closePath()
//   }
// }()

// const entities = []
// layer.addEntity(marker)

// for (let i = 0; i < 1000; i++) {
//   entities.push(layer.addEntity(new Ball()))
// }

// Platform.loop.add(() => {
//   const {upArrow, downArrow, leftArrow, rightArrow} = Platform.input.keyboard
//   const {dx, dy} = marker.getCoordinates()

//   if (upArrow) {
//     marker.setDyCoordinate(dy - 2)
//   }

//   if (downArrow) {
//     marker.setDyCoordinate(dy + 2)
//   }

//   if (leftArrow) {
//     marker.setDxCoordinate(dx - 2)
//   }

//   if (rightArrow) {
//     marker.setDxCoordinate(dx + 2)
//   }

//   for (let entity of entities) {
//     entity.setGravity({ dx, dy })
//   }
// })

// Platform.loop.add(() => {
//   const entities = layer.getEntities()

//   // Loop through the entities
//   let ball
//   let i = 0
//   let n = entities.length

//   for (; i < n;) {
//     ball = entities[i++]

//     // Ball Controls
//     let { dx, dy } = ball.getCoordinates()
//     let [vectorX, vectorY] = [ball.getVectorX(), ball.getVectorY()]

//     if (dx + vectorX + ball.getWidth() >= layer.getWidth() || dx + vectorX <= 0) {
//       ball.reverseVectorX(layer.getWidth() - dx + vectorX + ball.getWidth())
//     }

//     if (dy + vectorY + ball.getHeight() >= layer.getHeight() || dy + vectorY <= 0) {
//       ball.reverseVectorY(layer.getHeight() - dy + vectorY + ball.getHeight())
//     }
//   }
// })

const ball = layer.addEntity(new Ball())

ball.setGravityDy(layer.getHeight())
ball.disableGravityDx()

Platform.loop.add(() => {
  const { upArrow, downArrow, leftArrow, rightArrow } = Platform.input.keyboard
  const { dx, dy } = ball.getCoordinates()

  if (upArrow) {
    ball.setDyCoordinate(dy - 2)
  }

  if (downArrow) {
    ball.setDyCoordinate(dy + 2)
  }

  if (leftArrow) {
    ball.setDxCoordinate(dx - 2)
  }

  if (rightArrow) {
    ball.setDxCoordinate(dx + 2)
  }
}, 0)

Platform.loop.add(() => {
  let { dy } = ball.getCoordinates()
  let vectorY = ball.getVectorY()
  let ballHeight = ball.getHeight()
  let layerHeight = layer.getHeight()

  if (dy + vectorY + ballHeight >= layerHeight || dy + vectorY <= 0) {
    ball.reverseVectorY(layerHeight - dy + vectorY + ballHeight)
  }
})

Platform.loop.start()
