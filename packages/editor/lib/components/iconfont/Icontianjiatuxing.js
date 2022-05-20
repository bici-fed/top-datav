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

var Icontianjiatuxing = function Icontianjiatuxing(_ref) {
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
      d: 'M926.0032 163.9936H94.0032a31.9488 31.9488 0 0 0-32 32v640c0 17.7152 14.336 32 32 32h832c17.7152 0 32-14.336 32-32v-640a31.9488 31.9488 0 0 0-32-32z m-39.9872 632.0128H133.9904V235.9808h752.0256v560.0256z m-658.944-82.3296c3.1232 3.1232 8.192 3.1232 11.3152 0l172.544-172.4928 114.3808 114.5344c3.072 3.072 8.192 3.072 11.264 0l297.0112-297.216c3.072-3.072 3.072-8.192 0-11.264l-36.7616-36.864a8.0384 8.0384 0 0 0-11.3152 0l-254.464 254.6176L416.5632 450.56a8.0384 8.0384 0 0 0-11.3152 0l-214.8864 214.9888c-3.072 3.072-3.072 8.192 0 11.264l36.7104 36.9152z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

Icontianjiatuxing.defaultProps = {
  size: 18,
};
var _default = Icontianjiatuxing;
exports.default = _default;
