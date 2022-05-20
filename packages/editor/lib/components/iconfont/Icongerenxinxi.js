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

var Icongerenxinxi = function Icongerenxinxi(_ref) {
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
      d: 'M858.496 763.605333a374.016 374.016 0 0 0-80.597333-119.466666 375.637333 375.637333 0 0 0-119.466667-80.64c-0.426667-0.213333-0.853333-0.298667-1.237333-0.512A247.936 247.936 0 0 0 512 114.005333a247.936 247.936 0 0 0-145.194667 449.109334l-1.194666 0.469333a372.394667 372.394667 0 0 0-119.509334 80.64 375.637333 375.637333 0 0 0-80.64 119.466667 371.754667 371.754667 0 0 0-29.44 138.112 8.021333 8.021333 0 0 0 7.978667 8.192h59.989333a7.978667 7.978667 0 0 0 8.021334-7.808 298.112 298.112 0 0 1 87.808-204.288A298.026667 298.026667 0 0 1 512 610.005333c80.213333 0 155.52 31.189333 212.181333 87.893334a298.112 298.112 0 0 1 87.808 204.288 7.936 7.936 0 0 0 8.021334 7.808h59.989333c4.48 0 8.106667-3.712 8.021333-8.192a372.693333 372.693333 0 0 0-29.525333-138.24zM512 534.016a170.88 170.88 0 0 1-121.6-50.432 170.88 170.88 0 0 1-50.389333-121.6c0-45.866667 17.92-89.088 50.389333-121.6A170.88 170.88 0 0 1 512 190.037333c45.909333 0 89.088 17.877333 121.6 50.346667a170.88 170.88 0 0 1 50.389333 121.6c0 45.909333-17.92 89.130667-50.389333 121.6A170.88 170.88 0 0 1 512 534.016z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

Icongerenxinxi.defaultProps = {
  size: 18,
};
var _default = Icongerenxinxi;
exports.default = _default;
