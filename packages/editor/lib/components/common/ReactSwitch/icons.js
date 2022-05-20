'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.uncheckedIcon = exports.checkedIcon = void 0;

var _react = _interopRequireDefault(require('react'));

// @ts-nocheck
var uncheckedIcon = /*#__PURE__*/ _react.default.createElement(
  'svg',
  {
    viewBox: '-2 -5 14 20',
    height: '100%',
    width: '100%',
    style: {
      position: 'absolute',
      top: 0,
    },
  },
  /*#__PURE__*/ _react.default.createElement('path', {
    d: 'M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12',
    fill: '#fff',
    fillRule: 'evenodd',
  }),
);

exports.uncheckedIcon = uncheckedIcon;

var checkedIcon = /*#__PURE__*/ _react.default.createElement(
  'svg',
  {
    height: '100%',
    width: '100%',
    viewBox: '-2 -5 17 21',
    style: {
      position: 'absolute',
      top: 0,
    },
  },
  /*#__PURE__*/ _react.default.createElement('path', {
    d: 'M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0',
    fill: '#fff',
    fillRule: 'evenodd',
  }),
);

exports.checkedIcon = checkedIcon;
