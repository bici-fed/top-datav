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

var Iconzhuzhuangtu1 = function Iconzhuzhuangtu1(_ref) {
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
        viewBox: '0 0 1145 1024',
        width: size + 'px',
        height: size + 'px',
        style: style,
      },
      rest,
    ),
    /*#__PURE__*/ _react.default.createElement('path', {
      d: 'M72.282353 0l0.216847 831.247059H903.529412v72.282353H48.429176c-26.599906 0-48.188235-21.564235-48.188235-48.188236L0 0h72.282353z m108.423529 332.619294a24.094118 24.094118 0 0 1 24.094118 24.094118V746.917647a24.094118 24.094118 0 0 1-24.094118 24.094118h-24.094117a24.094118 24.094118 0 0 1-24.094118-24.094118V356.713412a24.094118 24.094118 0 0 1 24.094118-24.094118h24.094117z m216.847059-168.658823a24.094118 24.094118 0 0 1 24.094118 24.094117V746.917647a24.094118 24.094118 0 0 1-24.094118 24.094118h-24.094117a24.094118 24.094118 0 0 1-24.094118-24.094118V188.054588a24.094118 24.094118 0 0 1 24.094118-24.094117h24.094117z m216.847059 168.658823a24.094118 24.094118 0 0 1 24.094118 24.094118V746.917647a24.094118 24.094118 0 0 1-24.094118 24.094118h-24.094118a24.094118 24.094118 0 0 1-24.094117-24.094118V356.713412a24.094118 24.094118 0 0 1 24.094117-24.094118h24.094118z m216.847059-96.37647a24.094118 24.094118 0 0 1 24.094117 24.094117V746.917647a24.094118 24.094118 0 0 1-24.094117 24.094118h-24.094118a24.094118 24.094118 0 0 1-24.094117-24.094118V260.336941a24.094118 24.094118 0 0 1 24.094117-24.094117h24.094118z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

Iconzhuzhuangtu1.defaultProps = {
  size: 18,
};
var _default = Iconzhuzhuangtu1;
exports.default = _default;
