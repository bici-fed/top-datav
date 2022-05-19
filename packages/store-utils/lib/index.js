'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _cookie = require('./cookie/cookie');

Object.keys(_cookie).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _cookie[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _cookie[key];
    },
  });
});

var _store = require('./store/store');

Object.keys(_store).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _store[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _store[key];
    },
  });
});

var _observer = require('./store/observer');

Object.keys(_observer).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _observer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _observer[key];
    },
  });
});
