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

var Icondanqi = function Icondanqi(_ref) {
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
      d: 'M757.76 571.178667c31.317333 0.341333 56.746667 10.325333 76.245333 29.994666 19.84 19.498667 29.909333 44.245333 30.250667 74.24 0 24.021333-7.338667 45.354667-22.016 64l-117.248 146.986667h139.264V938.666667h-207.786667v-49.237334l142.293334-178.005333c5.504-7.168 9.216-13.824 11.221333-20.010667 1.365333-5.845333 2.005333-11.349333 2.005333-16.512 0-13.653333-4.266667-25.6-12.757333-35.754666-8.832-10.154667-21.333333-15.36-37.461333-15.744-14.336 0-26.282667 4.608-35.754667 13.781333-9.813333 9.130667-15.701333 22.058667-17.493333 38.741333h-52.053334c1.365333-30.336 11.52-55.424 30.549334-75.264a97.450667 97.450667 0 0 1 70.741333-29.482666zM233.642667 170.666667l296.704 590.208V170.666667h76.970666v725.333333h-78.848L229.888 299.690667V896H152.917333V170.666667h80.725334z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

Icondanqi.defaultProps = {
  size: 18,
};
var _default = Icondanqi;
exports.default = _default;
