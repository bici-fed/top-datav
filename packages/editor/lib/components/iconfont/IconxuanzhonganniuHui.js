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

var IconxuanzhonganniuHui = function IconxuanzhonganniuHui(_ref) {
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
      d: 'M512 64C264.590222 64 64 264.590222 64 512S264.590222 960 512 960 960 759.409778 960 512 759.409778 64 512 64z m193.507556 301.710222l-210.602667 291.982222a31.800889 31.800889 0 0 1-51.712 0l-124.700445-172.8a8.021333 8.021333 0 0 1 6.513778-12.686222h46.904889c10.183111 0 19.911111 4.892444 25.884445 13.283556l71.196444 98.816 157.212444-217.998222c5.973333-8.305778 15.587556-13.312 25.884445-13.312h46.933333c6.485333 0 10.268444 7.395556 6.485334 12.714666z',
      fill: (0, _helper.getIconColor)(color, 0, '#000000'),
      'fill-opacity': '.2',
    }),
  );
};

IconxuanzhonganniuHui.defaultProps = {
  size: 18,
};
var _default = IconxuanzhonganniuHui;
exports.default = _default;
