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

var Iconfenxi = function Iconfenxi(_ref) {
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
      d: 'M311.3984 1018.7776a30.208 30.208 0 0 1 0-60.416h429.4656a30.208 30.208 0 0 1 0 60.416H311.3984zM888.4224 47.2064H163.84a120.832 120.832 0 0 0-120.832 120.832v557.7728a120.832 120.832 0 0 0 120.832 120.7808h724.6848a120.832 120.832 0 0 0 120.7296-120.832V167.9872a120.832 120.832 0 0 0-120.832-120.832h0.0512z m-44.032 246.8864l-232.8576 273.92a42.2912 42.2912 0 0 1-62.9248 1.6896L417.1264 430.592l-165.9392 150.528a30.1568 30.1568 0 0 1-40.6016-44.6464l179.0976-162.56a42.3424 42.3424 0 0 1 59.1872 2.2016l129.7408 137.6256 219.7504-258.7136a30.208 30.208 0 0 1 45.9776 39.1168z',
      fill: (0, _helper.getIconColor)(color, 0, '#FFFFFF'),
    }),
  );
};

Iconfenxi.defaultProps = {
  size: 18,
};
var _default = Iconfenxi;
exports.default = _default;
