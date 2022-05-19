"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fork = require("./fork");

Object.keys(_fork).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _fork[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fork[key];
    }
  });
});

var _fork2 = require("./fork.rect");

Object.keys(_fork2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _fork2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fork2[key];
    }
  });
});

var _fork3 = require("./fork.anchor");

Object.keys(_fork3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _fork3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fork3[key];
    }
  });
});