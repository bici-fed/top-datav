'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _swimlaneV = require('./swimlaneV');

Object.keys(_swimlaneV).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _swimlaneV[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _swimlaneV[key];
    },
  });
});

var _swimlaneV2 = require('./swimlaneV.rect');

Object.keys(_swimlaneV2).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _swimlaneV2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _swimlaneV2[key];
    },
  });
});
