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

var Icondianjiyichushujudian = function Icondianjiyichushujudian(_ref) {
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
      d: 'M875.456 148.544c-198.144-198.08-524.032-198.08-722.112 0-198.08 198.144-198.08 524.032 0 722.112 198.08 198.08 523.968 198.08 722.112 0 198.08-198.08 198.08-517.632 0-722.112z m-204.48 568.704L511.232 557.504 351.36 717.248c-12.8 12.8-31.936 12.8-44.672 0-12.8-12.8-12.8-31.936 0-44.672l159.744-159.808-159.744-159.744c-12.8-12.8-12.8-31.936 0-44.736 12.8-12.8 31.936-12.8 44.672 0l159.808 159.808 159.744-159.808c12.8-12.8 31.936-12.8 44.736 0 12.8 12.8 12.8 32 0 44.8L555.904 512.704l159.808 159.808c12.8 12.8 12.8 31.936 0 44.672-12.8 12.8-32 12.8-44.8 0z',
      fill: (0, _helper.getIconColor)(color, 0, '#E02020'),
    }),
  );
};

Icondianjiyichushujudian.defaultProps = {
  size: 18,
};
var _default = Icondianjiyichushujudian;
exports.default = _default;
