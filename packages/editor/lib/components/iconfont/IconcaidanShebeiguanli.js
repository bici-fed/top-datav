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

var IconcaidanShebeiguanli = function IconcaidanShebeiguanli(_ref) {
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
      d: 'M308.544 149.312l407.872 0.64c7.04 0 13.632 3.712 17.216 9.856l204.416 352.96a19.776 19.776 0 0 1 0 19.776l-203.456 352.384a19.776 19.776 0 0 1-17.152 9.856l-407.872-0.576a19.84 19.84 0 0 1-17.152-9.92L88 531.392a19.776 19.776 0 0 1 0-19.84l203.392-352.32a19.776 19.776 0 0 1 17.152-9.92z m34.432 59.456a19.776 19.776 0 0 0-17.152 9.856L156.608 511.68a19.776 19.776 0 0 0 0 19.776l170.048 293.504a19.84 19.84 0 0 0 17.216 9.92l339.2 0.448c7.04 0 13.568-3.712 17.152-9.856l169.152-293.056a19.776 19.776 0 0 0 0-19.776l-169.984-293.504a19.84 19.84 0 0 0-17.216-9.92z m168.896 135.232a181.312 181.312 0 1 1 0 362.624 181.312 181.312 0 0 1 0-362.624z m0 68.224a113.088 113.088 0 1 0 0 226.176 113.088 113.088 0 0 0 0-226.176z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

IconcaidanShebeiguanli.defaultProps = {
  size: 18,
};
var _default = IconcaidanShebeiguanli;
exports.default = _default;
