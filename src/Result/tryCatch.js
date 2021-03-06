/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

const { Err, Ok } = require('.')
const curry = require('../core/curry')
const isFunction = require('../core/isFunction')

function tryCatch(fn) {
  if(!isFunction(fn)) {
    throw new TypeError('tryCatch: Function required for first argument')
  }

  return function() {
    const promiseArgs = arguments
    try { return Ok(fn.apply(null, promiseArgs)) }
    catch(e) { return Err(e) }
  }
}

module.exports = curry(tryCatch)
