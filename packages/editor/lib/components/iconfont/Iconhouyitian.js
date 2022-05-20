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

var Iconhouyitian = function Iconhouyitian(_ref) {
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
      d: 'M0 0m48.761905 0l926.47619 0q48.761905 0 48.761905 48.761905l0 926.47619q0 48.761905-48.761905 48.761905l-926.47619 0q-48.761905 0-48.761905-48.761905l0-926.47619q0-48.761905 48.761905-48.761905Z',
      fill: (0, _helper.getIconColor)(color, 0, '#E0E7F5'),
    }),
    /*#__PURE__*/ _react.default.createElement('path', {
      d: 'M630.735238 481.450667l-205.482667-156.818286c-24.380952-18.627048-59.538286-1.219048-59.538285 29.45219v313.660953c0 30.695619 35.157333 48.079238 59.538285 29.476571l205.507048-156.842666a37.059048 37.059048 0 0 0 0-58.928762z',
      fill: (0, _helper.getIconColor)(color, 1, '#096DD9'),
    }),
  );
};

Iconhouyitian.defaultProps = {
  size: 18,
};
var _default = Iconhouyitian;
exports.default = _default;
