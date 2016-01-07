/**
 * Modules
 */

/**
 * Expose reduce
 */

module.exports = reduce['default'] = reduce

/**
 * reduce
 */

function reduce (cb, init, arr) {
  var len = arr.length
  var acc = init
  if (!arr.length) return init

  for (var i = 0; i < len; i++) {
    acc = cb(acc, arr[i], i, arr)
  }

  return acc
}
