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

var Iconzhuzhuangtu = function Iconzhuzhuangtu(_ref) {
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
      d: 'M888.0128 792.0128H199.9872V167.936a8.0384 8.0384 0 0 0-7.9872-7.9872H135.9872a8.0384 8.0384 0 0 0-7.9872 7.9872V856.064c0 4.4032 3.584 7.9872 7.9872 7.9872h752.0256c4.4032 0 7.9872-3.584 7.9872-7.9872v-56.0128a8.0384 8.0384 0 0 0-7.9872-7.9872zM288 711.9872h56.0128c4.4032 0 7.9872-3.584 7.9872-7.9872v-144.0256a8.0384 8.0384 0 0 0-7.9872-7.9872H288a8.0384 8.0384 0 0 0-7.9872 7.9872v144.0256c0 4.4032 3.584 7.9872 7.9872 7.9872z m152.0128 0h56.0128c4.352 0 7.9872-3.584 7.9872-7.9872V384a8.0384 8.0384 0 0 0-7.9872-7.9872H440.0128a8.0384 8.0384 0 0 0-7.9872 7.9872v320c0 4.4032 3.584 7.9872 7.9872 7.9872z m152.0128 0h55.9616c4.4032 0 7.9872-3.584 7.9872-7.9872V461.9776a8.0384 8.0384 0 0 0-7.9872-7.9872h-56.0128a8.0384 8.0384 0 0 0-7.9872 7.9872v242.0224c0 4.4032 3.584 7.9872 7.9872 7.9872z m151.9616 0h56.0128c4.4032 0 7.9872-3.584 7.9872-7.9872V303.9744a8.0384 8.0384 0 0 0-7.9872-7.9872h-56.0128a8.0384 8.0384 0 0 0-7.9872 8.0384v399.9744c0 4.4032 3.584 7.9872 7.9872 7.9872z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

Iconzhuzhuangtu.defaultProps = {
  size: 18,
};
var _default = Iconzhuzhuangtu;
exports.default = _default;
