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

var Iconchaxun = function Iconchaxun(_ref) {
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
        viewBox: '0 0 3072 1024',
        width: size + 'px',
        height: size + 'px',
        style: style,
      },
      rest,
    ),
    /*#__PURE__*/ _react.default.createElement('path', {
      d: 'M384 163.84c-195.7888 0-348.16 152.3712-348.16 348.16s152.3712 348.16 348.16 348.16 348.16-152.3712 348.16-348.16S579.7888 163.84 384 163.84zM1536 163.84c-195.7888 0-348.16 152.3712-348.16 348.16s152.3712 348.16 348.16 348.16 348.16-152.3712 348.16-348.16S1731.7888 163.84 1536 163.84z m1152 0c-195.7888 0-348.16 152.3712-348.16 348.16s152.3712 348.16 348.16 348.16 348.16-152.3712 348.16-348.16-174.08-348.16-348.16-348.16z',
      fill: (0, _helper.getIconColor)(color, 0, '#222222'),
      'fill-opacity': '.7',
    }),
  );
};

Iconchaxun.defaultProps = {
  size: 18,
};
var _default = Iconchaxun;
exports.default = _default;
