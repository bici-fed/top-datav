'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _lifeline = require('./lifeline');

Object.keys(_lifeline).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _lifeline[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _lifeline[key];
    },
  });
});

var _lifeline2 = require('./lifeline.rect');

Object.keys(_lifeline2).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _lifeline2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _lifeline2[key];
    },
  });
});

var _lifeline3 = require('./lifeline.anchor');

Object.keys(_lifeline3).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _lifeline3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _lifeline3[key];
    },
  });
});
