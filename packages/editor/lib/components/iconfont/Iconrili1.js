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

var Iconrili1 = function Iconrili1(_ref) {
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
        viewBox: '0 0 1170 1024',
        width: size + 'px',
        height: size + 'px',
        style: style,
      },
      rest,
    ),
    /*#__PURE__*/ _react.default.createElement('path', {
      d: 'M819.2 56.905143c14.336 0 26.038857 11.702857 26.038857 26.038857l-0.073143 38.912h202.898286c31.451429 0 57.197714 25.819429 57.197714 57.344v771.145143a57.417143 57.417143 0 0 1-57.197714 57.344H122.148571a57.417143 57.417143 0 0 1-57.197714-57.344V179.2c0-31.451429 25.746286-57.270857 57.197714-57.270857l202.825143-0.073143v-38.912c0-14.336 11.702857-26.038857 26.038857-26.038857 14.336 0 26.038857 11.702857 26.038858 26.038857l-0.073143 38.912h416.109714v-38.912c0-14.336 11.702857-26.038857 26.038857-26.038857z m-494.153143 117.028571L122.148571 174.08a5.193143 5.193143 0 0 0-5.193142 5.193143v771.145143c0 2.925714 2.340571 5.266286 5.193142 5.266285H1048.137143c2.852571 0 5.193143-2.340571 5.193143-5.266285V179.2a5.193143 5.193143 0 0 0-5.193143-5.193143h-202.898286v112.128c0 14.336-11.702857 26.038857-25.965714 26.038857a26.112 26.112 0 0 1-26.038857-26.038857V174.08h-416.182857l0.146285 112.128c0 14.336-11.702857 26.038857-26.038857 26.038857a26.112 26.112 0 0 1-26.038857-26.038857V174.08z m494.153143 384a26.112 26.112 0 0 1 0 52.150857H351.085714a26.112 26.112 0 0 1 0-52.150857h468.114286z',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

Iconrili1.defaultProps = {
  size: 18,
};
var _default = Iconrili1;
exports.default = _default;
