'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _canvas = require('./canvas');

Object.keys(_canvas).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _canvas[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _canvas[key];
    },
  });
});

var _dom = require('./dom');

Object.keys(_dom).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _dom[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dom[key];
    },
  });
});

var _math = require('./math');

Object.keys(_math).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _math[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _math[key];
    },
  });
});

var _rect = require('./rect');

Object.keys(_rect).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _rect[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _rect[key];
    },
  });
});

var _uuid = require('./uuid');

Object.keys(_uuid).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _uuid[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _uuid[key];
    },
  });
});

var _browser = require('./browser');

Object.keys(_browser).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _browser[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _browser[key];
    },
  });
});
