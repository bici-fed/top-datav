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

var Iconzhankaishouqi = function Iconzhankaishouqi(_ref) {
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
      d: 'M531.712 533.1968l326.144-255.2832a15.872 15.872 0 0 0 6.144-12.5952v-77.312c0-6.7072-7.68-10.3936-12.9024-6.2976L512 447.0784 172.9024 181.76a7.9872 7.9872 0 0 0-12.9024 6.2976v77.312c0 4.864 2.304 9.5744 6.144 12.5952l326.0416 255.2832a32 32 0 0 0 39.5264 0z m0 304.0256l326.144-255.3344a15.872 15.872 0 0 0 6.144-12.5952V492.032c0-6.656-7.68-10.3936-12.9024-6.2976L512 751.104 172.9024 485.6832a7.9872 7.9872 0 0 0-12.9024 6.2976v77.312c0 4.9152 2.304 9.6256 6.144 12.5952l326.0416 255.3344a32 32 0 0 0 39.5264 0z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

Iconzhankaishouqi.defaultProps = {
  size: 18,
};
var _default = Iconzhankaishouqi;
exports.default = _default;
