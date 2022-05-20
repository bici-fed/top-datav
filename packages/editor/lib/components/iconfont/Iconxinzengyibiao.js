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

var Iconxinzengyibiao = function Iconxinzengyibiao(_ref) {
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
      d: 'M512 0a512.576 512.576 0 0 1 512 512 512 512 0 1 1-512-512z m0 111.424a400.576 400.576 0 0 0 0 801.152A401.152 401.152 0 0 0 912.576 512 400.576 400.576 0 0 0 512 111.424z m11.712 177.728c30.72 0 55.68 24.96 55.68 55.68V456.32h111.424a55.68 55.68 0 1 1 0 111.488h-111.36v111.36a55.68 55.68 0 1 1-111.488 0v-111.36h-111.36a55.68 55.68 0 1 1 0-111.488h111.36V344.96c0-30.784 24.96-55.744 55.68-55.744z',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

Iconxinzengyibiao.defaultProps = {
  size: 18,
};
var _default = Iconxinzengyibiao;
exports.default = _default;
