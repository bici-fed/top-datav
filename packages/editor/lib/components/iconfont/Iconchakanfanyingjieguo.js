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

var Iconchakanfanyingjieguo = function Iconchakanfanyingjieguo(_ref) {
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
      d: 'M122.759228 0H933.646758v990.147765a33.129412 33.129412 0 0 1-32.406589 33.852235H90.35264V33.852235A33.129412 33.129412 0 0 1 122.759228 0z m118.964706 315.934118c35.84 0 64.873412-30.298353 64.873412-67.704471 0-37.345882-29.033412-67.704471-64.873412-67.704471S176.850522 210.823529 176.850522 248.229647c0 37.406118 29.033412 67.704471 64.873412 67.704471z m124.325647-135.408942a16.564706 16.564706 0 0 0-16.263529 16.926118v118.482824h481.159529c8.975059 0 16.263529-7.589647 16.26353-16.865883V180.464941H365.989346zM193.053816 406.226824a16.564706 16.564706 0 0 0-16.263529 16.865882v118.543059h654.155294c8.975059 0 16.263529-7.589647 16.26353-16.926118V406.226824H192.993581z m0 225.641411a16.564706 16.564706 0 0 0-16.263529 16.926118v118.482823h654.155294c8.975059 0 16.263529-7.589647 16.26353-16.865882V631.868235H192.993581z',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

Iconchakanfanyingjieguo.defaultProps = {
  size: 18,
};
var _default = Iconchakanfanyingjieguo;
exports.default = _default;
