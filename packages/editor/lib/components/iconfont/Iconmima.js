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

var Iconmima = function Iconmima(_ref) {
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
      d: 'M768 341.333333h-42.666667V256c0-117.76-95.573333-213.333333-213.333333-213.333333S298.666667 138.24 298.666667 256v85.333333H256c-46.933333 0-85.333333 38.4-85.333333 85.333334v426.666666c0 46.933333 38.4 85.333333 85.333333 85.333334h512c46.933333 0 85.333333-38.4 85.333333-85.333334V426.666667c0-46.933333-38.4-85.333333-85.333333-85.333334zM379.733333 256c0-72.96 59.306667-132.266667 132.266667-132.266667 72.96 0 132.266667 59.306667 132.266667 132.266667v85.333333H379.733333V256zM768 853.333333H256V426.666667h512v426.666666z m-298.666667-256H341.333333v85.333334h341.333334v-85.333334h-213.333334z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

Iconmima.defaultProps = {
  size: 18,
};
var _default = Iconmima;
exports.default = _default;
