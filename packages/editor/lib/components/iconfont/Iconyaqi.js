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

var Iconyaqi = function Iconyaqi(_ref) {
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
      d: 'M888.661333 545.706667c27.776 0.426667 52.010667 9.301333 72.661334 26.624l-50.645334 60.330666c-14.677333-11.52-29.866667-17.322667-45.653333-17.322666-17.792 0-33.024 5.76-45.653333 17.322666-14.250667 11.349333-21.589333 29.653333-22.058667 55.04V896h-69.632v-346.026667h69.674667v36.693334h1.28c22.912-27.306667 52.906667-40.96 90.026666-40.96zM405.205333 128L682.666667 896h-71.424l-71.808-198.784H221.610667L155.989333 896H85.290667L338.816 128h66.389333z m-31.829333 109.525333l-129.578667 392.490667h271.36l-141.781333-392.533333z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

Iconyaqi.defaultProps = {
  size: 18,
};
var _default = Iconyaqi;
exports.default = _default;
