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

var IconZYzhankai = function IconZYzhankai(_ref) {
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
        viewBox: '0 0 1280 1024',
        width: size + 'px',
        height: size + 'px',
        style: style,
      },
      rest,
    ),
    /*#__PURE__*/ _react.default.createElement('path', {
      d: 'M156.8 583.04a64 64 0 1 0-57.6 113.92l512 256a64 64 0 0 0 57.6 0l512-256a64 64 0 0 0-57.6-113.92L640 824.32 156.8 583.04z m0-576a64 64 0 0 0-57.6 113.92l512 256a64 64 0 0 0 57.6 0l512-256a64 64 0 0 0-57.6-113.92L640 248.32 156.8 7.04z',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

IconZYzhankai.defaultProps = {
  size: 18,
};
var _default = IconZYzhankai;
exports.default = _default;
