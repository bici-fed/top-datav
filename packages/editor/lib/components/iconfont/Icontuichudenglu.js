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

var Icontuichudenglu = function Icontuichudenglu(_ref) {
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
      d: 'M888.32 757.418667h-53.802667a7.765333 7.765333 0 0 0-7.68 7.68v61.781333H197.034667V197.12H826.88v61.781333c0 4.181333 3.498667 7.68 7.68 7.68h53.845333a7.68 7.68 0 0 0 7.68-7.68V158.72a30.634667 30.634667 0 0 0-30.72-30.72H158.72a30.634667 30.634667 0 0 0-30.72 30.72v706.56c0 17.024 13.696 30.72 30.72 30.72h706.56c17.024 0 30.72-13.696 30.72-30.72v-100.181333a7.68 7.68 0 0 0-7.68-7.68z m18.56-251.733334L765.013333 393.685333a8.021333 8.021333 0 0 0-13.013333 6.314667v75.989333h-314.026667a8.021333 8.021333 0 0 0-7.978666 8.021334v55.978666c0 4.394667 3.626667 8.021333 8.021333 8.021334h313.984v75.989333c0 6.698667 7.808 10.496 13.013333 6.314667l141.866667-112a7.978667 7.978667 0 0 0 0-12.629334z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

Icontuichudenglu.defaultProps = {
  size: 18,
};
var _default = Icontuichudenglu;
exports.default = _default;
