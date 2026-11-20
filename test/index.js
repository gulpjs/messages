import assert from "node:assert";
import { describe, it } from "node:test";

import * as symbols from "../index.js";

describe("messages", function () {
  it("does not have a duplicate symbol", function () {
    var seen = new Set();
    Object.values(symbols).forEach(function (symbol) {
      assert.deepStrictEqual(seen.has(symbol), false);
      seen.add(symbol);
    });
  });
});
