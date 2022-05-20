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

var Iconzhidutaishiguizepeizhi = function Iconzhidutaishiguizepeizhi(_ref) {
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
        viewBox: '0 0 1152 1024',
        width: size + 'px',
        height: size + 'px',
        style: style,
      },
      rest,
    ),
    /*#__PURE__*/ _react.default.createElement('path', {
      d: 'M212.48896 8C95.36896 8 0.00896 104.256 0.00896 224.32a211.52 211.52 0 0 0 212.48 213.12 211.52 211.52 0 0 0 212.544-213.12c0-120.064-95.36-216.32-212.608-216.32h0.064z m0.064 576.192a211.2 211.2 0 0 0-212.48 212.8 212.864 212.864 0 0 0 212.416 214.784 212.864 212.864 0 0 0 212.544-214.784 211.2 211.2 0 0 0-212.608-212.8h0.128zM548.10496 155.52h559.232A45.376 45.376 0 0 0 1152.00896 109.76a45.376 45.376 0 0 0-44.672-45.888H548.10496a45.376 45.376 0 0 0-44.8 45.888c-0.256 24.96 19.84 45.44 44.8 45.76z m559.232 166.08H548.10496a45.376 45.376 0 0 0-44.8 45.824 45.376 45.376 0 0 0 44.8 45.888h559.232A45.376 45.376 0 0 0 1152.00896 367.36a45.376 45.376 0 0 0-44.672-45.76z m0 286.4H548.10496a45.376 45.376 0 0 0-44.8 45.824c-0.256 24.96 19.84 45.44 44.8 45.824h559.232a45.376 45.376 0 0 0 44.672-45.824 45.376 45.376 0 0 0-44.672-45.824z m0 257.728H548.10496a45.376 45.376 0 0 0-44.8 45.824c-0.256 24.96 19.84 45.44 44.8 45.76h559.232a45.376 45.376 0 0 0 44.672-45.696 45.376 45.376 0 0 0-44.672-45.824z',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

Iconzhidutaishiguizepeizhi.defaultProps = {
  size: 18,
};
var _default = Iconzhidutaishiguizepeizhi;
exports.default = _default;
