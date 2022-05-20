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

var IconcaidanBanciguanli = function IconcaidanBanciguanli(_ref) {
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
      d: 'M811.072 512a42.24 42.24 0 0 1 42.24 42.24v342.208a42.24 42.24 0 0 1-42.24 42.24H212.928a42.24 42.24 0 0 1-42.24-42.24V554.24a42.24 42.24 0 0 1 42.24-42.24l129.792 0.064C387.84 551.872 447.104 576 512 576s124.16-24.128 169.28-63.936L811.072 512zM340.352 576H234.688v299.072h555.136V576h-105.472c-44.16 43.072-104.512 62.912-172.352 62.912S384 619.84 340.352 576zM512 85.312A213.312 213.312 0 1 1 512 512a213.312 213.312 0 0 1 0-426.688z m0 64A149.312 149.312 0 1 0 512 448a149.312 149.312 0 0 0 0-298.688z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

IconcaidanBanciguanli.defaultProps = {
  size: 18,
};
var _default = IconcaidanBanciguanli;
exports.default = _default;
