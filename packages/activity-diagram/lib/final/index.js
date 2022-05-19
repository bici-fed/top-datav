"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _final = require("./final");

Object.keys(_final).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _final[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _final[key];
    }
  });
});

var _final2 = require("./final.rect");

Object.keys(_final2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _final2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _final2[key];
    }
  });
});