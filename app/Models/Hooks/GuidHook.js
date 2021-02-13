'use strict'

const uuidv4 = require('uuid/v4')

const GuidHook = exports = module.exports = {}

GuidHook.id = (guid) => {
  guid.id = uuidv4()
}
