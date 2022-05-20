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

var Icontongbubaojingguize = function Icontongbubaojingguize(_ref) {
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
      d: 'M634.88 729.6H145.92C79.36 729.6 25.6 675.84 25.6 609.28V145.92C25.6 79.36 79.36 25.6 145.92 25.6h488.96c66.56 0 120.32 53.76 120.32 120.32v35.84c0 25.6-20.48 46.08-46.08 46.08-25.6 0-46.08-20.48-46.08-46.08v-35.84c0-15.36-12.8-28.16-28.16-28.16H145.92c-15.36 0-28.16 12.8-28.16 28.16v463.36c0 15.36 12.8 28.16 28.16 28.16h488.96c15.36 0 28.16-12.8 28.16-28.16V524.8c0-25.6 20.48-46.08 46.08-46.08 25.6 0 46.08 20.48 46.08 46.08v84.48c0 66.56-53.76 120.32-120.32 120.32zM414.72 1024c-66.56 0-120.32-53.76-120.32-120.32v-33.28c0-25.6 20.48-46.08 46.08-46.08 25.6 0 46.08 20.48 46.08 46.08v33.28c0 15.36 12.8 28.16 28.16 28.16h488.96c15.36 0 28.16-12.8 28.16-28.16V440.32c0-15.36-12.8-28.16-28.16-28.16H414.72c-15.36 0-28.16 12.8-28.16 28.16V524.8c0 25.6-20.48 46.08-46.08 46.08-25.6 0-46.08-20.48-46.08-46.08V440.32C294.4 373.76 348.16 320 414.72 320h488.96C970.24 320 1024 373.76 1024 440.32v463.36c0 66.56-53.76 120.32-120.32 120.32H414.72z',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

Icontongbubaojingguize.defaultProps = {
  size: 18,
};
var _default = Icontongbubaojingguize;
exports.default = _default;
