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

var Iconsousuo = function Iconsousuo(_ref) {
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
      d: 'M1004.096 927.104L800.256 723.2a448.448 448.448 0 0 0 93.248-274.56 448.32 448.32 0 0 0-130.752-317.312A446.08 446.08 0 0 0 620.8 35.2 445.312 445.312 0 0 0 446.848 0a444.416 444.416 0 0 0-315.904 131.648A448.32 448.32 0 0 0 0.192 448.896a448.192 448.192 0 0 0 130.752 317.312 446.4 446.4 0 0 0 142.016 96.256 441.216 441.216 0 0 0 173.888 35.328 443.136 443.136 0 0 0 274.944-94.912l203.52 203.52a56.064 56.064 0 0 0 78.912 0 56.384 56.384 0 0 0-0.128-79.36z m-557.248-121.152c-195.84 0-355.2-160.192-355.2-357.12 0-196.992 159.296-357.12 355.2-357.12 195.84 0 355.2 160.128 355.2 357.12 0 196.928-159.36 357.12-355.2 357.12z',
      fill: (0, _helper.getIconColor)(color, 0, '#222222'),
      'fill-opacity': '.7',
    }),
  );
};

Iconsousuo.defaultProps = {
  size: 18,
};
var _default = Iconsousuo;
exports.default = _default;
