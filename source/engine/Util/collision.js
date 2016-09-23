'use strict'

import { Base } from '../Game/objects/base'

function boxes (item1, item2) {
  // Ensure that the items are valid
  if (!(item1 instanceof Base) || !(item1 instanceof Base)) {
    throw Error('Collisions may only be calculated between valid Items')
  }

  if (item1._coordinates && item2._coordinates) {
    if (item1._coordinates.x + item1._width < item2._coordinates.x) {
      return false
    }

    if (item1._coordinates.x > item2._coordinates.x + item2._width) {
      return false
    }

    if (item1._coordinates.y + item1._height < item2._coordinates.y) {
      return false
    }

    if (item1._coordinates.y > item2._coordinates.y + item2._height) {
      return false
    }
  }

  return true
}

export const collision = { boxes }
