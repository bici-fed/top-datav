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

var Iconbingzhuangtu = function Iconbingzhuangtu(_ref) {
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
        viewBox: '0 0 1126 1024',
        width: size + 'px',
        height: size + 'px',
        style: style,
      },
      rest,
    ),
    /*#__PURE__*/ _react.default.createElement('path', {
      d: 'M465.454545 0v465.454545h465.454546c0 257.070545-208.384 465.454545-465.454546 465.454546S0 722.525091 0 465.454545 208.384 0 465.454545 0z m-69.818181 75.962182l-3.677091 0.674909C208.570182 111.080727 69.818182 272.058182 69.818182 465.454545c0 218.507636 177.128727 395.636364 395.636363 395.636364 193.396364 0 354.373818-138.752 388.817455-322.141091l0.651636-3.677091H442.181818a46.545455 46.545455 0 0 1-46.545454-46.545454V75.962182zM523.636364 0c222.370909 0 403.130182 178.222545 407.202909 399.616L930.909091 407.272727h-69.818182c0-183.924364-147.130182-333.474909-330.123636-337.384727L523.636364 69.818182V0z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

Iconbingzhuangtu.defaultProps = {
  size: 18,
};
var _default = Iconbingzhuangtu;
exports.default = _default;
