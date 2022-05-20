'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
Object.defineProperty(exports, 'EditorLayout', {
  enumerable: true,
  get: function get() {
    return _Layout.default;
  },
});
Object.defineProperty(exports, 'Preview', {
  enumerable: true,
  get: function get() {
    return _Preview.default;
  },
});

require('antd/dist/antd.css');

var _Layout = _interopRequireDefault(require('./components/Layout'));

var _Preview = _interopRequireDefault(require('./components/Preview'));
