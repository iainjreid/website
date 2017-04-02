'use strict'

const utils = {}
let uid = 0
const letters = '0123456789ABCDEF'

/**
 * @description This method will return a unique string.
 *
 * @return {String} The unique string
 */
export function generateUid () {
  return (uid++).toString(36)
}

export function randomX () {
  return utils.randomNumberBetween(100, window.innerWidth - 100)
}

export function randomY () {
  return utils.randomNumberBetween(100, window.innerHeight - 100)
}

export function randomNumberBetween (a, b) {
  return Math.floor(Math.random() * (b - a + 1) + a)
}

export function randomColorHex () {
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export function getDotProduct (a, b) {
  let v = 0
  let i = a.length

  while (i--) {
    v += a[i] * b[i]
  }

  return v
}

export function pythagoras (a, b) {
  return Math.sqrt(a * a + b * b)
}

export function getAngleBetweenThreePoints (a, b, c) {
  const ab = [b.dx - a.dx, b.dy - a.dy]
  const bc = [c.dx - b.dx, c.dy - b.dy]

  return Math.acos(-utils.getDotProduct(ab, bc) / (utils.pythagoras(...ab) * utils.pythagoras(...bc)))
}

export function getCenterBetweenTwoPoints (a, b) {
  return {
    dx: (a.dx + b.dx) / 2,
    dy: (a.dy + b.dy) / 2
  }
}

export function degreesToRadians (degrees) {
  return degrees * Math.PI / 180
}

export function radiansToDegrees (radians) {
  return radians * 180 / Math.PI
}

export { utils }
