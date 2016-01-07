
# reduce-array

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Fast and functional array reduce implementation. Same concept as the [native reduce implementation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) except different argument order for currying.

## Installation

    $ npm install @f/reduce-array

## Usage

```js
var reduce = require('@f/reduce-array')

var sum = reduce(
  function (prev, curr) {
    return prev + curr
  },
  2,
  [2, 3, 6]
)

// sum -> 13
```

## API

### reduceArray(cb, initialValue, arr)

- `cb` - Callback called for each `arr` item with a accumlator value and the current item. Optional index and array

```js
function cb (accumulator, currentItem, index, array) {}
```

- `initialValue` - First value for the accumulator
- `arr` Array to be reduced

**Returns:** The accumulated value

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/reduce-array.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/reduce-array
[git-image]: https://img.shields.io/github/tag/micro-js/reduce-array.svg?style=flat-square
[git-url]: https://github.com/micro-js/reduce-array
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/reduce-array.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/reduce-array
