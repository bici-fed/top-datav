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

var Iconxiayibu = function Iconxiayibu(_ref) {
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
      fill: (0, _helper.getIconColor)(color, 0, '#EBF5FF'),
    }),
    /*#__PURE__*/ _react.default.createElement('path', {
      d: 'M468.401231 280.024615a14.769231 14.769231 0 0 1 0 20.873847l-199.561846 199.522461a10.24 10.24 0 0 0 0 14.493539l199.561846 199.561846a14.769231 14.769231 0 1 1-20.873846 20.873846l-199.561847-199.522462a39.778462 39.778462 0 0 1 0-56.280615l199.522462-199.522462a14.769231 14.769231 0 0 1 20.873846 0z m-5.632 198.104616a29.538462 29.538462 0 1 1 0 59.076923 29.538462 29.538462 0 0 1 0-59.076923z m295.384615 0a29.538462 29.538462 0 1 1 0 59.076923 29.538462 29.538462 0 0 1 0-59.076923z m-196.923077 0a29.538462 29.538462 0 1 1 0 59.076923 29.538462 29.538462 0 0 1 0-59.076923z m98.461539 0a29.538462 29.538462 0 1 1 0 59.076923 29.538462 29.538462 0 0 1 0-59.076923z',
      fill: (0, _helper.getIconColor)(color, 1, '#096DD9'),
    }),
  );
};

Iconxiayibu.defaultProps = {
  size: 18,
};
var _default = Iconxiayibu;
exports.default = _default;
