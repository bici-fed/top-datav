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

var IcontongdaoHover = function IcontongdaoHover(_ref) {
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
      d: 'M512 85.312a426.688 426.688 0 1 1 0 853.376A426.688 426.688 0 0 1 512 85.312z m0 64a362.688 362.688 0 1 0 0 725.376A362.688 362.688 0 0 0 512 149.312zM448 341.376c4.608 0 9.152 1.536 12.8 4.288l199.104 149.76a21.312 21.312 0 0 1 0 34.112L460.8 678.4a21.312 21.312 0 0 1-34.112-17.088V362.752c0-11.776 9.536-21.376 21.312-21.376z',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

IcontongdaoHover.defaultProps = {
  size: 18,
};
var _default = IcontongdaoHover;
exports.default = _default;
