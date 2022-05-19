'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _pilot = require('./pilot');

Object.keys(_pilot).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _pilot[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pilot[key];
    },
  });
});

var _pilot2 = require('./pilot.rect');

Object.keys(_pilot2).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _pilot2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pilot2[key];
    },
  });
});
