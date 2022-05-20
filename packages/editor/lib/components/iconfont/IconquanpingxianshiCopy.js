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

var IconquanpingxianshiCopy = function IconquanpingxianshiCopy(_ref) {
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
      d: 'M599.38133333 41.08743111v60.73002667c0 13.39847111-10.92266667 24.24832-24.24832 24.24832H126.06577778v449.06723555c0 13.39847111-10.92266667 24.24832-24.24832 24.24832h-60.73002667a24.24832 24.24832 0 0 1-24.24832-24.24832v-509.72444444c0-26.86976 21.69969778-48.56945778 48.56945778-48.56945778h509.72444444c13.39847111 0 24.24832 10.92266667 24.24832 24.24832zM424.61866667 982.91256889v-60.73002667a24.24832 24.24832 0 0 1 24.24832-24.24832H897.93422222V448.86698667c0-13.39847111 10.92266667-24.24832 24.24832-24.24832h60.73002667c13.39847111 0 24.24832 10.92266667 24.24832 24.24832v509.72444444a48.56945778 48.56945778 0 0 1-48.56945778 48.56945778h-509.72444444a24.24832 24.24832 0 0 1-24.24832-24.24832z',
      fill: (0, _helper.getIconColor)(color, 0, '#ffffff'),
    }),
  );
};

IconquanpingxianshiCopy.defaultProps = {
  size: 18,
};
var _default = IconquanpingxianshiCopy;
exports.default = _default;
