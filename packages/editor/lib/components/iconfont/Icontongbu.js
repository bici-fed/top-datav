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

var Icontongbu = function Icontongbu(_ref) {
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
        viewBox: '0 0 1088 1024',
        width: size + 'px',
        height: size + 'px',
        style: style,
      },
      rest,
    ),
    /*#__PURE__*/ _react.default.createElement('path', {
      d: 'M836.032 8c94.784 0 173.44 73.6 179.584 168.192l0.384 11.776v216.064a36.032 36.032 0 0 1-71.424 6.4l-0.576-6.4V188.032c0-55.68-42.24-102.208-97.6-107.52l-10.368-0.512H187.968c-55.616 0-102.144 42.24-107.52 97.664l-0.448 10.368v647.936c0 55.68 42.24 102.208 97.664 107.52l10.368 0.512h144a35.968 35.968 0 0 1 6.4 71.424l-6.4 0.576h-144A180.032 180.032 0 0 1 8.32 847.808l-0.384-11.776V187.968c0-94.784 73.6-173.44 168.192-179.584l11.776-0.384h648.064z m-264.96 999.68a36.032 36.032 0 0 0 4.608-4.672l103.168-123.776a35.968 35.968 0 0 0-27.712-59.008H584V568.192a36.032 36.032 0 0 0-72 0v252.032H444.928a35.968 35.968 0 0 0-27.776 59.008l103.168 123.84c12.8 15.296 35.456 17.28 50.688 4.544z m359.936 0a36.032 36.032 0 0 0 4.608-4.672l103.232-123.776a35.968 35.968 0 0 0-27.712-59.008H944V568.192a35.968 35.968 0 1 0-72 0v252.032h-67.136a35.968 35.968 0 0 0-27.712 59.008l103.168 123.84c12.8 15.296 35.456 17.28 50.688 4.544z',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

Icontongbu.defaultProps = {
  size: 18,
};
var _default = Icontongbu;
exports.default = _default;
