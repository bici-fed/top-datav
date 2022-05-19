'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _echarts = require('./echarts');

Object.keys(_echarts).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _echarts[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _echarts[key];
    },
  });
});

var _register = require('./register');

Object.keys(_register).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _register[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _register[key];
    },
  });
});
