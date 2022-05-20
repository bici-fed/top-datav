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

var Iconqiyonggaiziduan = function Iconqiyonggaiziduan(_ref) {
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
        viewBox: '0 0 1609 1024',
        width: size + 'px',
        height: size + 'px',
        style: style,
      },
      rest,
    ),
    /*#__PURE__*/ _react.default.createElement('path', {
      d: 'M804.571429 18.285714a871.716571 871.716571 0 0 1 761.417142 467.382857 54.857143 54.857143 0 0 1 0 54.857143A871.643429 871.643429 0 0 1 804.571429 1005.714286 871.643429 871.643429 0 0 1 43.154286 538.331429a54.857143 54.857143 0 0 1 0-54.857143A871.716571 871.716571 0 0 1 804.571429 18.285714z m0 109.714286A758.125714 758.125714 0 0 0 154.550857 512 758.125714 758.125714 0 0 0 804.571429 896 758.125714 758.125714 0 0 0 1454.592 512 758.125714 758.125714 0 0 0 804.571429 128zM1024 512a219.428571 219.428571 0 1 1-438.857143 0 219.428571 219.428571 0 0 1 438.857143 0',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

Iconqiyonggaiziduan.defaultProps = {
  size: 18,
};
var _default = Iconqiyonggaiziduan;
exports.default = _default;
