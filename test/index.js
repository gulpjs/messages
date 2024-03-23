'use strict';

var expect = require('expect');

var messages = require('../index.js');

describe('messages', function () {
  it('does not have a duplicate symbol', function (done) {
    var seen = new Set();
    Object.values(messages).forEach(function (symbol) {
      expect(seen.has(symbol)).toEqual(false);
      seen.add(symbol);
    });
    done();
  });
});
