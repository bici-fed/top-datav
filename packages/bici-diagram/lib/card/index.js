'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _card = require('./card');

Object.keys(_card).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _card[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _card[key];
    },
  });
});

var _card2 = require('./card.rect');

Object.keys(_card2).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _card2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _card2[key];
    },
  });
});
