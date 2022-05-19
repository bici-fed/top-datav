'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _class = require('./class');

Object.keys(_class).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _class[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _class[key];
    },
  });
});

var _class2 = require('./class.rect');

Object.keys(_class2).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _class2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _class2[key];
    },
  });
});
