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

var IconZYbianji = function IconZYbianji(_ref) {
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
      d: 'M1021.539159 512.206492V921.607167A102.563487 102.563487 0 0 1 919.402309 1024H102.13685A102.563487 102.563487 0 0 1 0 921.607167V102.635162A102.563487 102.563487 0 0 1 102.13685 0.412984h357.521641c30.71785 0 51.196416 20.478567 51.196416 51.196417s-20.563894 51.196416-51.196416 51.196416H153.162612c-30.547195 0-51.025762 20.478567-51.025762 51.196416V870.410751c0 30.71785 20.478567 51.196416 51.025762 51.196416h715.128608c30.71785 0 51.111089-20.478567 51.111089-51.196416v-358.374914c0-30.71785 20.478567-51.196416 51.025761-51.196416 30.632522 0 51.025762 20.478567 51.025762 51.196416h0.085327z m-10.239283-501.724879c20.478567 25.598208 15.358925 61.4357-10.239284 81.914266L439.265251 655.47113c-15.358925 25.598208-45.991447 35.837491-71.504328 20.478567-25.598208-15.358925-35.752164-46.076775-20.478566-71.674983 5.119642-5.119642 10.239283-15.358925 20.478566-20.478566L924.436623 20.806224c20.478567-25.598208 61.350372-25.598208 86.863253-10.239284z',
      fill: (0, _helper.getIconColor)(color, 0, '#FFFFFF'),
    }),
  );
};

IconZYbianji.defaultProps = {
  size: 18,
};
var _default = IconZYbianji;
exports.default = _default;
