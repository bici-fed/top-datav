'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
Object.defineProperty(exports, 'Preview', {
  enumerable: true,
  get: function get() {
    return _Preview['default'];
  },
});
exports['default'] = void 0;

var _Preview = _interopRequireDefault(require('./components/Preview'));

var _Layout = _interopRequireDefault(require('./components/Layout'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/// <reference path="../../../typings.d.ts" />
var _default = _Layout['default']; // https://github.com/umijs/father/issues/48

exports['default'] = _default;
