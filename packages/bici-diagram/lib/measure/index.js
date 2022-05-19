'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _measure = require('./measure');

Object.keys(_measure).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _measure[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _measure[key];
    },
  });
});

var _measure2 = require('./measure.rect');

Object.keys(_measure2).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _measure2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _measure2[key];
    },
  });
});
