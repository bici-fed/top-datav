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

var Iconzhexiantu = function Iconzhexiantu(_ref) {
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
      d: 'M888.0128 792.0128H199.9872V167.936a8.0384 8.0384 0 0 0-7.9872-7.9872H135.9872a8.0384 8.0384 0 0 0-7.9872 7.9872V856.064c0 4.4032 3.584 7.9872 7.9872 7.9872h752.0256c4.4032 0 7.9872-3.584 7.9872-7.9872v-56.0128a8.0384 8.0384 0 0 0-7.9872-7.9872zM305.8176 637.696c3.072 3.072 8.0896 3.072 11.264 0l138.3424-137.5744 127.5904 128.3584c3.072 3.072 8.192 3.072 11.264 0l275.456-275.3024c3.072-3.072 3.072-8.192 0-11.264l-39.6288-39.6288a8.0384 8.0384 0 0 0-11.264 0l-230.0416 229.888-127.3856-128.1536a8.0384 8.0384 0 0 0-11.3152 0l-183.808 182.6816c-3.072 3.072-3.072 8.192 0 11.264l39.5264 39.7312z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

Iconzhexiantu.defaultProps = {
  size: 18,
};
var _default = Iconzhexiantu;
exports.default = _default;
