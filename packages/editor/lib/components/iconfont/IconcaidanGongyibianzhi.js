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

var IconcaidanGongyibianzhi = function IconcaidanGongyibianzhi(_ref) {
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
      d: 'M650.624 763.392c7.552 20.416 18.944 38.976 33.216 54.784L512 917.376l-171.84-99.2c14.272-15.808 25.6-34.368 33.216-54.784L512 843.392l138.624-80zM214.336 597.312a106.688 106.688 0 1 1 0 213.376 106.688 106.688 0 0 1 0-213.376z m597.312 0a106.688 106.688 0 1 1 0 213.376 106.688 106.688 0 0 1 0-213.376z m-597.312 64a42.688 42.688 0 1 0 0 85.376 42.688 42.688 0 0 0 0-85.376z m597.312 0a42.688 42.688 0 1 0 0 85.376 42.688 42.688 0 0 0 0-85.376z m-462.464-417.92c6.592 20.8 16.96 39.808 30.4 56.32L243.456 378.24v157.696a171.712 171.712 0 0 0-64 0.704V341.312l169.728-97.92z m325.632 0l169.728 97.92v195.392a171.52 171.52 0 0 0-64-0.704V378.24l-136.192-78.528a170.24 170.24 0 0 0 30.464-56.32z m-161.792-158.08a106.688 106.688 0 1 1 0 213.376 106.688 106.688 0 0 1 0-213.376z m0 64a42.688 42.688 0 1 0 0 85.376 42.688 42.688 0 0 0 0-85.376z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

IconcaidanGongyibianzhi.defaultProps = {
  size: 18,
};
var _default = IconcaidanGongyibianzhi;
exports.default = _default;
