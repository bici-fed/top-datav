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

var Iconbianji3 = function Iconbianji3(_ref) {
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
      d: 'M257.6896 752.0256a40.448 40.448 0 0 0 5.9904-0.512l168.2432-29.4912a9.7792 9.7792 0 0 0 5.2736-2.816l423.936-423.936a9.984 9.984 0 0 0 0-14.08l-166.2464-166.2976a9.8816 9.8816 0 0 0-7.0656-2.9184 9.8816 9.8816 0 0 0-7.168 2.9184l-423.8336 423.936a10.1376 10.1376 0 0 0-2.816 5.2736l-29.4912 168.192a33.8944 33.8944 0 0 0 33.1776 39.68zM325.12 577.536L687.8208 215.04l73.2672 73.3184-362.7008 362.5984-88.8832 15.7184 15.616-89.0368z m554.9056 258.4064H144.0256a31.9488 31.9488 0 0 0-32.0512 32v35.9936c0 4.4032 3.584 8.0384 8.0384 8.0384h783.9744c4.4032 0 8.0384-3.584 8.0384-8.0384v-35.9936a31.9488 31.9488 0 0 0-32-32z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

Iconbianji3.defaultProps = {
  size: 18,
};
var _default = Iconbianji3;
exports.default = _default;
