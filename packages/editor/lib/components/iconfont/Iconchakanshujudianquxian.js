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

var Iconchakanshujudianquxian = function Iconchakanshujudianquxian(_ref) {
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
      d: 'M914.752 0C972.8 0 1024 51.2 1024 109.248v805.504C1024 972.8 972.8 1024 914.752 1024H109.248C51.2 1024 0 972.8 0 914.752V109.248C0 51.2 51.2 0 109.248 0zM631.488 238.912c-17.088 0-30.72 10.24-37.568 27.328l-102.4 307.2-61.44-143.36a29.76 29.76 0 0 0-27.328-20.48c-13.632-3.392-23.872 0-34.112 10.24l-54.592 54.592h-92.16A37.888 37.888 0 0 0 184.32 512c0 20.48 17.088 37.568 37.568 37.568h109.184c10.24 0 20.48-3.456 27.328-10.24L385.728 512l78.464 184.32c6.848 13.632 20.48 23.872 37.568 23.872a33.28 33.28 0 0 0 34.112-27.264l95.616-286.72 34.112 116.032c3.392 17.088 20.48 27.328 37.568 27.328h98.944c20.48 0 37.568-17.088 37.568-37.568a37.888 37.888 0 0 0-37.568-37.568h-71.68l-57.984-208.192c-6.848-17.088-20.48-27.328-40.96-27.328z',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

Iconchakanshujudianquxian.defaultProps = {
  size: 18,
};
var _default = Iconchakanshujudianquxian;
exports.default = _default;
