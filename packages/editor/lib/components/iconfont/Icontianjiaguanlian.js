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

var Icontianjiaguanlian = function Icontianjiaguanlian(_ref) {
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
        viewBox: '0 0 1260 1024',
        width: size + 'px',
        height: size + 'px',
        style: style,
      },
      rest,
    ),
    /*#__PURE__*/ _react.default.createElement('path', {
      d: 'M957.833846 159.901538a40.172308 40.172308 0 0 1 27.569231 11.815385l256 261.513846c7.089231 7.108923 11.057231 16.738462 11.037538 26.781539V905.846154a116.627692 116.627692 0 0 1-116.588307 118.153846H279.630769a116.588308 116.588308 0 0 1-116.588307-118.153846V549.809231A37.809231 37.809231 0 0 1 200.861538 512a38.596923 38.596923 0 0 1 35.446154 37.809231V905.846154a40.172308 40.172308 0 0 0 40.172308 39.384615h859.372308a39.384615 39.384615 0 0 0 39.384615-39.384615l-0.009846-363.913846H916.086154a38.596923 38.596923 0 0 1-38.596923-38.596923l-0.009846-264.664616H530.116923a39.384615 39.384615 0 1 1 0-78.769231h427.716923zM956.248615 256l0.009847 208.738462h208.728615L956.248615 256zM200.861538 9.452308A38.596923 38.596923 0 0 1 236.307692 48.049231l-0.009846 113.427692H355.249231a39.384615 39.384615 0 1 1 0 78.769231H236.297846L236.307692 354.461538a38.596923 38.596923 0 0 1-35.446154 40.172308A37.809231 37.809231 0 0 1 163.052308 354.461538l-0.009846-114.215384H47.261538a39.384615 39.384615 0 1 1 0-78.769231h115.780924l0.009846-113.427692A37.809231 37.809231 0 0 1 200.861538 9.452308z',
      fill: (0, _helper.getIconColor)(color, 0, '#E0E7F5'),
    }),
  );
};

Icontianjiaguanlian.defaultProps = {
  size: 18,
};
var _default = Icontianjiaguanlian;
exports.default = _default;
