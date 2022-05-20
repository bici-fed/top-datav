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

var Iconzhexiantu1 = function Iconzhexiantu1(_ref) {
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
        viewBox: '0 0 1145 1024',
        width: size + 'px',
        height: size + 'px',
        style: style,
      },
      rest,
    ),
    /*#__PURE__*/ _react.default.createElement('path', {
      d: 'M72.282353 0l0.216847 831.247059H903.529412v72.282353H48.429176c-26.599906 0-48.188235-21.564235-48.188235-48.188236L0 0h72.282353z m775.348706 512.915576l15.420235 18.480189a24.094118 24.094118 0 0 1-3.011765 33.948611l-193.307105 161.67153a24.094118 24.094118 0 0 1-24.335059 3.927341l-259.734589-103.098729-128.566211 107.291106a24.094118 24.094118 0 0 1-33.924518-3.059953l-15.420235-18.480189a24.094118 24.094118 0 0 1 3.035859-33.948611l150.564141-125.674918a24.094118 24.094118 0 0 1 24.335059-3.903247l259.6864 103.074635 171.309176-143.239529a24.094118 24.094118 0 0 1 33.924518 3.011764z m-1.831153-472.051952l19.082541 14.697411a24.094118 24.094118 0 0 1 4.433318 33.755859L654.083012 369.362824a24.094118 24.094118 0 0 1-22.81713 9.13167l-256.144564-39.996235-169.622589 251.132988a24.094118 24.094118 0 0 1-31.033223 7.926965l-2.409412-1.445647-19.974023-13.492706a24.094118 24.094118 0 0 1-6.481318-33.442635l186.753506-276.504095a24.094118 24.094118 0 0 1 23.708612-10.312282L614.159059 302.622118l197.812706-257.373365a24.094118 24.094118 0 0 1 33.804047-4.409224z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

Iconzhexiantu1.defaultProps = {
  size: 18,
};
var _default = Iconzhexiantu1;
exports.default = _default;
