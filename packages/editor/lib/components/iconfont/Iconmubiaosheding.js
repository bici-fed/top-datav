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

var Iconmubiaosheding = function Iconmubiaosheding(_ref) {
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
      d: 'M81.088 692.672c26.24 0 42.816 17.92 45.184 41.28l0.32 5.952v141.632H268.8c28.416 0 45.504 21.12 45.504 47.232 0 24.192-14.528 43.968-39.104 46.848l-6.4 0.384H81.088c-26.304 0-42.88-17.92-45.248-41.344l-0.256-5.888v-188.864c0-26.176 17.024-47.232 45.44-47.232z m847.616 0c26.24 0 47.68 17.92 50.816 41.28l0.384 5.952v188.864c0 24.192-19.328 43.968-44.8 46.848l-6.4 0.384h-187.712c-22.784 0-45.504-21.12-45.504-47.232a48.384 48.384 0 0 1 40.256-46.848l5.248-0.384H883.2v-141.632c0-26.176 22.784-47.232 45.504-47.232zM507.712 220.48c153.6 0 284.48 126.912 284.48 283.328 0 156.416-130.88 283.328-284.48 283.328A282.496 282.496 0 0 1 223.36 503.808a282.496 282.496 0 0 1 284.416-283.328zM268.8 31.68c28.416 0 45.504 20.992 45.504 47.168s-17.088 47.232-45.504 47.232H126.592v141.632c0 26.176-17.088 47.232-45.504 47.232-28.48 0-45.504-21.056-45.504-47.232V78.848c0-26.176 17.024-47.232 45.44-47.232H268.8z m659.904 0c28.48 0 51.2 20.992 51.2 47.168v188.864c0 26.176-22.72 47.232-51.2 47.232-22.72 0-45.504-21.056-45.504-47.232V126.08h-142.208c-22.784 0-45.504-21.12-45.504-47.232 0-26.176 22.72-47.232 45.44-47.232h187.776z',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

Iconmubiaosheding.defaultProps = {
  size: 18,
};
var _default = Iconmubiaosheding;
exports.default = _default;
