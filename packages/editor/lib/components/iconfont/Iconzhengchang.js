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

var Iconzhengchang = function Iconzhengchang(_ref) {
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
      d: 'M300.916364 159.650909a60.509091 60.509091 0 0 0-21.178182-79.825454c-27.694545-16.290909-63.534545-8.145455-79.825455 17.92 0 0 0 1.629091-1.629091 1.62909a751.802182 751.802182 0 0 0-42.356363 410.53091s-188.974545 557.149091 407.272727 488.727272c99.374545-11.403636 226.443636-84.712727 255.767273-140.101818 17.92-24.436364 14.661818-58.647273-6.516364-81.454545-24.436364-21.178182-60.276364-17.92-81.454545 6.516363-37.469091 43.985455-104.261818 47.243636-146.618182 9.774546-43.985455-37.469091-47.243636-104.261818-9.774546-146.618182 37.469091-43.985455 104.261818-47.243636 146.618182-9.774546 13.032727 11.403636 22.807273 26.065455 29.323637 40.727273 8.145455 30.952727 40.727273 48.872727 71.68 40.727273 30.952727-8.145455 48.872727-40.727273 40.727272-71.68-1.629091-3.258182-1.629091-6.516364-3.258182-8.145455a222.813091 222.813091 0 0 0-206.894545-141.730909 299.380364 299.380364 0 0 0-118.923636 19.549091 479.604364 479.604364 0 0 1 237.847272-239.476363c32.581818-9.774545 50.501818-42.356364 42.356364-74.938182-9.774545-32.581818-42.356364-50.501818-74.938182-42.356364-9.774545 3.258182-185.716364 40.727273-320.930909 281.832727A456.890182 456.890182 0 0 1 569.716364 143.36c26.065455-17.92 32.581818-55.389091 14.661818-81.454545C566.458182 35.84 530.618182 29.323636 502.923636 47.243636c-8.145455 6.516364-179.2 123.810909-224.814545 397.498182-19.549091-96.116364-11.403636-195.490909 22.807273-285.090909z',
      fill: (0, _helper.getIconColor)(color, 0, '#7EB348'),
    }),
  );
};

Iconzhengchang.defaultProps = {
  size: 18,
};
var _default = Iconzhengchang;
exports.default = _default;
