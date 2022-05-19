"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class = require("./class");

Object.keys(_class).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _class[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _class[key];
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