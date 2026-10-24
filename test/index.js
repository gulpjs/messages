"use strict";

var assert = require("node:assert");
var { describe, it } = require("node:test");

var messages = require("../index.js");

describe("messages", function () {
  it("does not have a duplicate symbol", function () {
    var seen = new Set();
    Object.values(messages).forEach(function (symbol) {
      assert.deepStrictEqual(seen.has(symbol), false);
      seen.add(symbol);
    });
  });
});
