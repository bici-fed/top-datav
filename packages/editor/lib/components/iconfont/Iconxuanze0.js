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

var Iconxuanze0 = function Iconxuanze0(_ref) {
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
      d: 'M512 64a448 448 0 1 0 0.0512 896.0512A448 448 0 0 0 512 64z m193.536 301.7216l-210.6368 291.9936a31.7952 31.7952 0 0 1-51.712 0L318.5152 484.864a8.0384 8.0384 0 0 1 6.5024-12.6976h46.8992c10.1888 0 19.8656 4.864 25.9072 13.312l71.168 98.816 157.184-218.0608a32 32 0 0 1 25.9072-13.312h46.8992c6.5024 0 10.3424 7.424 6.5024 12.7488z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

Iconxuanze0.defaultProps = {
  size: 18,
};
var _default = Iconxuanze0;
exports.default = _default;
