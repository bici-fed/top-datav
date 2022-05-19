"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _focus = require("./focus");

Object.keys(_focus).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _focus[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _focus[key];
    }
  });
});

var _focus2 = require("./focus.rect");

Object.keys(_focus2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _focus2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _focus2[key];
    }
  });
});

var _focus3 = require("./focus.anchor");

Object.keys(_focus3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _focus3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _focus3[key];
    }
  });
});