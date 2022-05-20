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

var Iconqiehuanguanlian1 = function Iconqiehuanguanlian1(_ref) {
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
        viewBox: '0 0 1280 1024',
        width: size + 'px',
        height: size + 'px',
        style: style,
      },
      rest,
    ),
    /*#__PURE__*/ _react.default.createElement('path', {
      d: 'M304.810667 442.368a53.589333 53.589333 0 0 1-75.690667 75.690667l-213.333333-213.333334a53.333333 53.333333 0 0 1 0-75.690666l213.333333-213.333334a53.589333 53.589333 0 0 1 75.690667 75.690667L128.853333 266.922667l175.957334 175.445333zM53.76 320.256a53.333333 53.333333 0 1 1 0-106.666667h640a53.333333 53.333333 0 0 1 0 106.666667h-640zM975.786667 517.973333a53.589333 53.589333 0 1 1 75.690666-75.690666l213.333334 213.333333a53.333333 53.333333 0 0 1 0 75.690667l-213.333334 213.333333a53.589333 53.589333 0 0 1-75.690666-75.690667l175.957333-175.445333-175.957333-175.530667z m251.221333 122.197334a53.333333 53.333333 0 0 1 0 106.666666h-640a53.333333 53.333333 0 0 1 0-106.666666h640z',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

Iconqiehuanguanlian1.defaultProps = {
  size: 18,
};
var _default = Iconqiehuanguanlian1;
exports.default = _default;
