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

var Icon9Ping = function Icon9Ping(_ref) {
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
        viewBox: '0 0 1450 1024',
        width: size + 'px',
        height: size + 'px',
        style: style,
      },
      rest,
    ),
    /*#__PURE__*/ _react.default.createElement('path', {
      d: 'M0 0h439.594667v298.666667H0zM505.536 0h448.384v298.666667H505.536zM1011.072 0H1450.666667v298.666667H1011.072z',
      fill: (0, _helper.getIconColor)(color, 0, '#C8DEF7'),
    }),
    /*#__PURE__*/ _react.default.createElement('path', {
      d: 'M0 362.666667h439.594667v298.666666H0zM505.536 362.666667h439.594667v298.666666H505.536zM1011.072 362.666667H1450.666667v298.666666H1011.072z',
      fill: (0, _helper.getIconColor)(color, 1, '#C8DEF7'),
    }),
    /*#__PURE__*/ _react.default.createElement('path', {
      d: 'M0 725.333333h439.594667v298.666667H0zM505.536 725.333333h439.594667v298.666667H505.536zM1011.072 725.333333H1450.666667v298.666667H1011.072z',
      fill: (0, _helper.getIconColor)(color, 2, '#C8DEF7'),
    }),
  );
};

Icon9Ping.defaultProps = {
  size: 18,
};
var _default = Icon9Ping;
exports.default = _default;
