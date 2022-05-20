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

var Iconduoxuan = function Iconduoxuan(_ref) {
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
      d: 'M880 112a32 32 0 0 1 32 32v736a32 32 0 0 1-32 32H144a32 32 0 0 1-32-32V144a32 32 0 0 1 32-32z m-40.021333 72.021333H184.021333v656h656V184.021333z m-151.04 168.96c6.442667 0 10.24 7.424 6.442666 12.714667l-210.56 292.010667a31.786667 31.786667 0 0 1-51.712 0l-124.586666-172.8a8.021333 8.021333 0 0 1 6.485333-12.714667h46.890667a32 32 0 0 1 25.898666 13.312l71.210667 98.816 157.098667-218.026667a31.829333 31.829333 0 0 1 25.898666-13.312z',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

Iconduoxuan.defaultProps = {
  size: 18,
};
var _default = Iconduoxuan;
exports.default = _default;
