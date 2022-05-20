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

var Iconxiazai = function Iconxiazai(_ref) {
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
      d: 'M972.8 640.128v276.992c0 30.592-25.792 55.36-57.6 55.424L108.8 972.8c-31.808 0-57.6-24.768-57.6-55.36v-276.992H137.6v248.512l748.928-0.32v-248.512H972.8zM524.288 51.2c15.936 0 28.8 12.416 28.8 27.712v552l161.344-155.136a29.632 29.632 0 0 1 38.016-2.304l2.688 2.304 20.416 19.584a26.88 26.88 0 0 1 2.368 36.48l-2.368 2.688-246.528 236.16a27.712 27.712 0 0 1-38.4 0L245.12 534.528a26.944 26.944 0 0 1 0-39.168l20.352-19.584a29.632 29.632 0 0 1 40.704 0l160.512 154.304V78.912c0-15.36 12.928-27.712 28.8-27.712h28.8z',
      fill: (0, _helper.getIconColor)(color, 0, '#222222'),
    }),
  );
};

Iconxiazai.defaultProps = {
  size: 18,
};
var _default = Iconxiazai;
exports.default = _default;
