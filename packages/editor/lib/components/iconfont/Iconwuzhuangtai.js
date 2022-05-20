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

var Iconwuzhuangtai = function Iconwuzhuangtai(_ref) {
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
      d: 'M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z',
      fill: (0, _helper.getIconColor)(color, 0, '#F4F4F4'),
    }),
    /*#__PURE__*/ _react.default.createElement('path', {
      d: 'M512 93.090909a418.909091 418.909091 0 1 1 0 837.818182 418.909091 418.909091 0 0 1 0-837.818182z m207.220364 186.181818h-444.043637v65.349818h174.266182a1306.996364 1306.996364 0 0 1-6.144 93.277091h-201.076364v65.908364h188.229819C407.552 588.706909 355.607273 663.552 232.727273 710.469818c17.314909 13.405091 35.188364 37.981091 44.683636 55.854546 134.609455-55.296 192.139636-145.780364 218.391273-245.76v143.546181c0 67.025455 18.432 88.808727 88.808727 88.808728h83.223273c60.322909 0 79.313455-25.693091 87.133091-120.645818-18.990545-4.468364-49.152-16.197818-63.674182-27.927273-3.351273 71.493818-6.702545 83.223273-29.044364 83.223273h-68.701091c-23.458909 0-27.927273-3.351273-27.927272-24.576v-159.185455h184.32V437.899636h-239.057455c3.909818-30.72 5.585455-62.557091 7.261091-93.277091h201.076364V279.272727z',
      fill: (0, _helper.getIconColor)(color, 1, '#222222'),
      'fill-opacity': '.7',
    }),
  );
};

Iconwuzhuangtai.defaultProps = {
  size: 18,
};
var _default = Iconwuzhuangtai;
exports.default = _default;
