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

var Icondaochubiaoge = function Icondaochubiaoge(_ref) {
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
      d: 'M928 160H96a31.9488 31.9488 0 0 0-32 32v640c0 17.7152 14.336 32 32 32h832c17.7152 0 32-14.336 32-32V192a31.9488 31.9488 0 0 0-32-32z m-39.9872 208.0256h-211.968V231.936h211.968v136.0384z m0 224h-211.968V431.9744h211.968v160.0512zM412.0064 431.9744h199.9872v160.0512H412.0064V431.9744z m199.9872-64H412.0064V231.9872h199.9872v136.0384z m-476.0064 64h211.968v160.0512h-211.968V431.9744z m0-199.9872h211.968v136.0384h-211.968V231.936z m0 424.0384h211.968v135.9872h-211.968v-135.9872z m275.968 0h200.0384v135.9872H412.0064v-135.9872z m476.0576 135.9872h-211.968v-135.9872h211.968v135.9872z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

Icondaochubiaoge.defaultProps = {
  size: 18,
};
var _default = Icondaochubiaoge;
exports.default = _default;
