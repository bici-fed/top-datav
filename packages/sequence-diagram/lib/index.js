"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lifeline = require("./lifeline");

Object.keys(_lifeline).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _lifeline[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _lifeline[key];
    }
  });
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

var _register = require("./register");

Object.keys(_register).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _register[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _register[key];
    }
  });
});