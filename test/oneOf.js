/* global describe, it */
var assert = require('assert')
var strs = require('..')
var parse = require('@mona/parse')

describe('oneOf()', function () {
  it('succeeds if the next token is present in the char bag', function () {
    assert.equal(parse(strs.oneOf('abc'), 'b'), 'b')
    assert.throws(function () {
      parse(strs.oneOf('abc'), 'd')
    }, /expected one of {a,b,c}/)
  })
  it('optionally does a case-insensitive match', function () {
    assert.equal(parse(strs.oneOf('abc', false), 'B'), 'B')
    assert.throws(function () {
      parse(strs.oneOf('abc', true), 'B')
    }, /expected one of {a,b,c}/)
  })
  it('accepts an array of strings as matches', function () {
    assert.equal(parse(strs.oneOf(['foo', 'bar']), 'bar'), 'bar')
    assert.throws(function () {
      parse(strs.oneOf(['foo', 'bar']), 'baz')
    }, /expected one of {foo,bar}/)
  })
  it('defaults to being case-sensitive', function () {
    assert.throws(function () {
      parse(strs.oneOf('abc'), 'B')
    }, /expected one of {a,b,c}/)
  })
})
