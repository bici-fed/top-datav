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

var Iconliebiao = function Iconliebiao(_ref) {
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
      d: 'M917.333333 298.666667v21.333333a21.333333 21.333333 0 0 1-21.333333 21.333333H320a21.333333 21.333333 0 0 1-21.333333-21.333333V298.666667a21.333333 21.333333 0 0 1 21.333333-21.333334H896a21.333333 21.333333 0 0 1 21.333333 21.333334zM181.333333 362.666667a53.333333 53.333333 0 1 0 0-106.666667 53.333333 53.333333 0 0 0 0 106.666667z m0 213.333333a53.333333 53.333333 0 1 0 0-106.666667 53.333333 53.333333 0 0 0 0 106.666667z m0 106.666667a53.333333 53.333333 0 1 1 0 106.666666 53.333333 53.333333 0 0 1 0-106.666666z m714.666667 21.333333a21.333333 21.333333 0 0 1 21.333333 21.333333v21.333334a21.333333 21.333333 0 0 1-21.333333 21.333333H320a21.333333 21.333333 0 0 1-21.333333-21.333333V725.333333a21.333333 21.333333 0 0 1 21.333333-21.333333H896z m0-213.333333a21.333333 21.333333 0 0 1 21.333333 21.333333v21.333333a21.333333 21.333333 0 0 1-21.333333 21.333334H320a21.333333 21.333333 0 0 1-21.333333-21.333334V512a21.333333 21.333333 0 0 1 21.333333-21.333333H896z',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

Iconliebiao.defaultProps = {
  size: 18,
};
var _default = Iconliebiao;
exports.default = _default;
