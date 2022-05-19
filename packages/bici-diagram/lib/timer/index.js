"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _timer = require("./timer");

Object.keys(_timer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _timer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _timer[key];
    }
  });
});

var _timer2 = require("./timer.rect");

Object.keys(_timer2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _timer2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _timer2[key];
    }
  });
});