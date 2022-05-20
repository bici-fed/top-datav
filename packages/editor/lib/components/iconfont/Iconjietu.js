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

var Iconjietu = function Iconjietu(_ref) {
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
      d: 'M465.92 457.92L233.92 146.56a38.912 38.912 0 0 1 5.248-52.416 34.624 34.624 0 0 1 49.536 3.52L530.56 381.76l241.92-284.096a34.624 34.624 0 0 1 49.472-3.584c14.912 13.44 17.152 35.968 5.248 52.096L595.136 457.6l144.128 169.408a174.08 174.08 0 0 1 212.864 79.36 182.08 182.08 0 0 1-40.704 227.648 172.992 172.992 0 0 1-226.56-2.56 182.144 182.144 0 0 1-35.776-228.48 75.136 75.136 0 0 1-3.712-4.608L530.56 544.192 465.92 457.92z m-47.104 55.616l67.264 89.856-70.528 94.528a32.192 32.192 0 0 1-3.584 4.672 182.144 182.144 0 0 1-35.712 228.48 172.992 172.992 0 0 1-226.624 2.624 182.08 182.08 0 0 1-40.704-227.712 174.08 174.08 0 0 1 212.928-79.04l97.024-113.92-0.064 0.512z m-146.432 389.184a105.6 105.6 0 0 0 87.232-62.848c15.744-35.52 11.52-76.8-11.136-108.352a104.512 104.512 0 0 0-98.048-42.944 107.2 107.2 0 0 0-91.712 118.08c5.248 57.728 55.872 100.48 113.664 96.064z m516.224 0a104.448 104.448 0 0 0 97.92-43.008c22.656-31.552 26.88-72.768 11.136-108.288a104.96 104.96 0 0 0-200.96 33.344c-6.4 57.792 34.432 110.08 91.968 117.952z',
      fill: (0, _helper.getIconColor)(color, 0, '#222222'),
    }),
  );
};

Iconjietu.defaultProps = {
  size: 18,
};
var _default = Iconjietu;
exports.default = _default;
