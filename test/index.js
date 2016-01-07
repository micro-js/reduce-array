/**
 * Imports
 */

var reduce = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should have initial value', function (t) {
  var sum = reduce(
    function (prev, curr) {
      return prev
    },
    5,
    []
  )

  t.equal(sum, 5)
  t.end()
})

test('should accumulate values', function (t) {
  var sum = reduce(
    function (prev, curr) {
      return prev + curr
    },
    10,
    [12, 8, 4, 2, 1]
  )

  t.equal(sum, 37)
  t.end()
})
