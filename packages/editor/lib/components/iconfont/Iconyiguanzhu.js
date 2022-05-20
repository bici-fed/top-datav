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

var Iconyiguanzhu = function Iconyiguanzhu(_ref) {
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
      d: 'M990.549333 400.042667a44.885333 44.885333 0 0 0-36.238222-30.549334l-277.845333-40.391111-124.302222-251.790222A44.885333 44.885333 0 0 0 512 52.280889c-17.066667 0-32.597333 9.784889-40.163556 25.031111L347.591111 329.102222l-277.845333 40.391111A44.942222 44.942222 0 0 0 44.828444 446.008889l201.045334 195.925333-47.274667 276.764445a44.942222 44.942222 0 0 0 65.024 47.217777l248.490667-130.730666 248.547555 130.673778a45.169778 45.169778 0 0 0 47.217778-3.356445 44.942222 44.942222 0 0 0 17.806222-43.804444l-47.445333-276.764445 201.102222-195.925333a45.169778 45.169778 0 0 0 11.207111-45.966222z',
      fill: (0, _helper.getIconColor)(color, 0, '#F7B500'),
    }),
  );
};

Iconyiguanzhu.defaultProps = {
  size: 18,
};
var _default = Iconyiguanzhu;
exports.default = _default;
