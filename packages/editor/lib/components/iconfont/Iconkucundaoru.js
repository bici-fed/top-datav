'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread2'));

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties'),
);

var _react = _interopRequireDefault(require('react'));

var _helper = require('./helper');

var _excluded = ['size', 'color', 'style'];
var DEFAULT_STYLE = {
  display: 'block',
};

var Iconkucundaoru = function Iconkucundaoru(_ref) {
  var size = _ref.size,
    color = _ref.color,
    _style = _ref.style,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var style = _style
    ? (0, _objectSpread2.default)((0, _objectSpread2.default)({}, DEFAULT_STYLE), _style)
    : DEFAULT_STYLE;
  return /*#__PURE__*/ _react.default.createElement(
    'svg',
    (0, _extends2.default)(
      {
        viewBox: '0 0 1024 1024',
        width: size + 'px',
        height: size + 'px',
        style: style,
      },
      rest,
    ),
    /*#__PURE__*/ _react.default.createElement('path', {
      d: 'M926.72 512v350.72a64 64 0 0 1-64 64h-704a64 64 0 0 1-64-64v-704a64 64 0 0 1 64-64H448V0H128a128 128 0 0 0-128 128v768a128 128 0 0 0 128 128h768a128 128 0 0 0 128-128V512h-97.28zM399.36 48.64a48 48 0 0 0 24.32 42.24 47.36 47.36 0 0 0 48.64 0A48.64 48.64 0 1 0 399.36 48.64zM926.72 512A48.64 48.64 0 1 0 1024 512a48.64 48.64 0 0 0-97.28 0z m-109.44-79.36a49.28 49.28 0 0 0-68.48 0L613.12 568.32a571.52 571.52 0 0 1-4.48-64 474.24 474.24 0 0 1 236.8-410.24L796.8 7.68A568.96 568.96 0 0 0 512 501.76v39.68l-108.8-108.8a48.64 48.64 0 0 0-69.12 0 49.92 49.92 0 0 0 0 69.12l207.36 207.36a49.92 49.92 0 0 0 69.12 0l206.72-207.36a49.28 49.28 0 0 0 0-69.12z m-44.8-384a48 48 0 0 0 24.32 42.24 47.36 47.36 0 0 0 48.64 0 48 48 0 0 0 24.32-42.24 48.64 48.64 0 0 0-24.32-42.24 50.56 50.56 0 0 0-48.64 0 48.64 48.64 0 0 0-24.32 42.24z',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

Iconkucundaoru.defaultProps = {
  size: 18,
};
var _default = Iconkucundaoru;
exports.default = _default;
