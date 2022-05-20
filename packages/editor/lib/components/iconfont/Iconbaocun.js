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

var Iconbaocun = function Iconbaocun(_ref) {
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
      d: 'M772.693333 42.410667h-625.493333c-57.429333 0-104.362667 46.933333-104.362667 104.192v729.770666c0 57.429333 46.933333 104.277333 104.277334 104.277334h729.770666c57.344 0 104.277333-46.848 104.277334-104.277334V250.88L772.693333 42.410667zM512 876.373333a153.514667 153.514667 0 0 1-156.416-156.330666A153.6 153.6 0 0 1 512 563.626667a153.6 153.6 0 0 1 156.416 156.416c0 88.746667-67.754667 156.330667-156.416 156.330666m156.416-521.216h-521.386667V146.602667h521.386667v208.554666z',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

Iconbaocun.defaultProps = {
  size: 18,
};
var _default = Iconbaocun;
exports.default = _default;
