"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = require("./default");

Object.keys(_default).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _default[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _default[key];
    }
  });
});

var _rectangle = require("./nodes/rectangle");

Object.keys(_rectangle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _rectangle[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _rectangle[key];
    }
  });
});

var _text = require("./nodes/text");

Object.keys(_text).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _text[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _text[key];
    }
  });
});