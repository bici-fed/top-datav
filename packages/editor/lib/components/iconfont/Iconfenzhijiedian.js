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

var Iconfenzhijiedian = function Iconfenzhijiedian(_ref) {
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
        viewBox: '0 0 1100 1024',
        width: size + 'px',
        height: size + 'px',
        style: style,
      },
      rest,
    ),
    /*#__PURE__*/ _react.default.createElement('path', {
      d: 'M451.095782 541.468972l193.876881 194.348409h135.643087V618.485325a41.415937 41.415937 0 0 1 19.254088-35.679005l6.365638-3.300701c15.717623-6.444225 33.871478-2.671996 45.659695 9.666339l161.341401 160.791284a41.887466 41.887466 0 0 1 0 59.255439l-161.341401 160.791284a41.887466 41.887466 0 0 1-71.279421-29.313367v-100.121259h-157.176231a52.418273 52.418273 0 0 1-37.172178-15.167507L376.672837 615.891917a52.654037 52.654037 0 0 1 74.422945-74.422945zM99.571142 473.883192c-31.749599 0-49.117572-14.460213-51.946744-43.302051L47.152869 421.464919c0-34.893123 17.446562-52.339685 52.418273-52.339685h292.269201L586.267341 174.619649A52.418273 52.418273 0 0 1 623.439519 159.530731h157.176231V42.120086a41.415937 41.415937 0 0 1 19.254088-35.679004l6.365638-3.300701c15.717623-6.522814 33.871478-2.671996 45.659695 9.58775l161.341401 160.869872a41.887466 41.887466 0 0 1 0 59.176851L851.895171 393.723315a41.887466 41.887466 0 0 1-71.279421-29.313367V264.288689H644.972663L461.469414 448.420643c-6.365637 14.774566-19.254088 23.104906-38.508177 24.991021L413.923604 473.883192h-314.352462z',
      fill: (0, _helper.getIconColor)(color, 0, '#515151'),
    }),
  );
};

Iconfenzhijiedian.defaultProps = {
  size: 18,
};
var _default = Iconfenzhijiedian;
exports.default = _default;
