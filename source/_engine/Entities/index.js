'use strict'

// Classes
import { Base, Basic, Sprite } from './classes'

/**
 * @module Entities
 *
 * @description The visual aspects of an application is made up of Entities. These Entities may take very different
 *              forms depending on their purpose, however, they all share the same drawing and redrawing logic as
 *              defined in the base Entity class
 */
const Entities = {}

Entities.Base = Base
Entities.Basic = Basic
Entities.Sprite = Sprite

export { Entities }
