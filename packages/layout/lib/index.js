"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _align = require("./align");

Object.keys(_align).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _align[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _align[key];
    }
  });
});

var _layout = require("./layout");

Object.keys(_layout).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _layout[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _layout[key];
    }
  });
});