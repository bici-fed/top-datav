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

var Iconyichang = function Iconyichang(_ref) {
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
      d: 'M507.686788 0C227.452121 0 0 225.093818 0 502.411636s227.452121 502.380606 507.686788 502.380606c280.265697 0 507.717818-225.062788 507.717818-502.380606C1015.404606 225.093818 787.952485 0 507.655758 0z m-50.796606 703.332848c0-27.741091 22.55903-50.20703 50.269091-50.20703h1.05503a50.269091 50.269091 0 0 1 0 100.476121h-1.05503a50.269091 50.269091 0 0 1-50.269091-50.269091z m0-201.448727V301.955879a50.796606 50.796606 0 1 1 101.531151 0v199.928242a50.796606 50.796606 0 1 1-101.531151 0z',
      fill: (0, _helper.getIconColor)(color, 0, '#FAAD14'),
    }),
  );
};

Iconyichang.defaultProps = {
  size: 18,
};
var _default = Iconyichang;
exports.default = _default;
