'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _varer = require('./varer');

Object.keys(_varer).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _varer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _varer[key];
    },
  });
});

var _varer2 = require('./varer.rect');

Object.keys(_varer2).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _varer2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _varer2[key];
    },
  });
});
