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

var Iconshanchu1 = function Iconshanchu1(_ref) {
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
      d: 'M983.26 161.646H40.74a40.375 40.375 0 0 0 0 80.75h80.677v659.748c0 69.413 71.095 121.27 134.656 121.27h511.708c63.414 0 107.739-49.883 107.739-121.197V242.395h107.666a40.375 40.375 0 0 0 0-80.822zM794.77 902.217c0 18.432-4.68 40.375-26.916 40.375H256.146c-25.16 0-53.833-21.504-53.833-40.375V242.395H794.77v659.749zM390.802 80.823h242.396a40.375 40.375 0 0 0 0-80.823H390.802a40.375 40.375 0 0 0 0 80.823zM377.417 875.3a40.375 40.375 0 0 0 40.375-40.448V350.135a40.375 40.375 0 0 0-80.75 0v484.718c0 22.308 18.067 40.448 40.375 40.448z m242.396 0a40.375 40.375 0 0 0 40.374-40.448V350.135a40.375 40.375 0 0 0-80.822 0v484.718c0 22.308 18.139 40.448 40.448 40.448z',
      fill: (0, _helper.getIconColor)(color, 0, '#D0021B'),
    }),
  );
};

Iconshanchu1.defaultProps = {
  size: 18,
};
var _default = Iconshanchu1;
exports.default = _default;
