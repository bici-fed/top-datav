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

var Iconxiazai1 = function Iconxiazai1(_ref) {
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
      d: 'M505.7024 660.992c3.1744 4.096 9.4208 4.096 12.5952 0l112.0256-141.6704a7.9872 7.9872 0 0 0-6.2976-12.9024H549.888V167.936a8.0384 8.0384 0 0 0-7.9872-7.9872H481.8944a8.0384 8.0384 0 0 0-7.9872 7.9872V506.368H399.9744c-6.656 0-10.3936 7.68-6.2976 12.9024l112.0256 141.824z m372.2752-34.9696h-59.9552a8.0384 8.0384 0 0 0-8.0384 7.9872v154.0096H214.016v-154.0096a8.0384 8.0384 0 0 0-8.0384-7.9872H146.0224a8.0384 8.0384 0 0 0-8.0384 7.9872v197.9904c0 17.7152 14.336 32 32 32h684.032c17.664 0 32-14.336 32-32v-197.9904a8.0384 8.0384 0 0 0-8.0384-7.9872z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

Iconxiazai1.defaultProps = {
  size: 18,
};
var _default = Iconxiazai1;
exports.default = _default;
