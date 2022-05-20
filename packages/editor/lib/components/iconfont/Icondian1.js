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

var Icondian1 = function Icondian1(_ref) {
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
      d: 'M765.525333 398.208A25.6 25.6 0 0 0 742.4 384h-169.813333l161.024-260.992a24.32 24.32 0 0 0 0.341333-25.045333A25.728 25.728 0 0 0 711.68 85.333333h-245.76a25.6 25.6 0 0 0-23.765333 15.658667l-184.32 448a24.32 24.32 0 0 0 2.56 23.168c4.778667 6.826667 12.714667 10.922667 21.205333 10.922667h116.650667L257.706667 947.669333a24.576 24.576 0 0 0 11.178666 30.336 26.112 26.112 0 0 0 32.597334-5.845333l460.8-547.541333a24.32 24.32 0 0 0 3.285333-26.410667zM360.064 823.893333l99.114667-256.938666a24.32 24.32 0 0 0-2.944-22.912 25.813333 25.813333 0 0 0-21.034667-10.709334H319.402667l163.84-398.208h183.210666l-161.066666 260.949334a24.32 24.32 0 0 0-0.341334 25.088 25.728 25.728 0 0 0 22.314667 12.586666h161.024L360.064 823.893333z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

Icondian1.defaultProps = {
  size: 18,
};
var _default = Icondian1;
exports.default = _default;
