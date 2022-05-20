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

var Icontianjiaxiang = function Icontianjiaxiang(_ref) {
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
      d: 'M960 512a448 448 0 1 1-896.0512-0.0512A448 448 0 0 1 960 512z m-256 24.0128V487.936a8.0384 8.0384 0 0 0-7.9872-7.9872h-152.0128V327.9872a8.0384 8.0384 0 0 0-5.4784-7.5776l-2.56-0.4096h-47.9744a8.0384 8.0384 0 0 0-7.9872 7.9872v152.0128H327.9872a8.0384 8.0384 0 0 0-7.5776 5.4784l-0.4096 2.56v47.9744c0 4.4032 3.584 7.9872 7.9872 7.9872h152.0128v152.0128c0 3.5328 2.304 6.5024 5.4784 7.5776l2.56 0.4096h47.9744c4.4032 0 7.9872-3.584 7.9872-7.9872v-152.0128h152.0128a8.0384 8.0384 0 0 0 7.5776-5.4784l0.4096-2.56z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

Icontianjiaxiang.defaultProps = {
  size: 18,
};
var _default = Icontianjiaxiang;
exports.default = _default;
