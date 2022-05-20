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

var Iconshipinjiankong = function Iconshipinjiankong(_ref) {
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
      d: 'M1003.31102 528.384v383.937306h-84.114285v-151.301224h-192.491102a94.500571 94.500571 0 0 0-12.49698-111.260735h205.00898v-121.375347h84.093387zM46.330776 645.705143l150.193632 158.908081-47.81453 22.235429c-19.414204 9.299592-36.466939 12.747755-49.862531-1.400163l-78.785306-83.382857c-13.374694-14.168816-9.048816-30.197551 1.400163-49.904327l24.868572-46.456163z m512.668734-526.628572c8.902531 0.20898 17.345306 3.970612 23.510204 10.44898l152.450613 160.496327a33.58302 33.58302 0 0 1-1.191184 47.521959l-205.259755 195.040653 78.074775 94.124408a95.106612 95.106612 0 0 0-49.653551 49.862531l-79.370449-95.64996-213.117387 202.501225a33.58302 33.58302 0 0 1-47.501062-1.191184L64.428408 621.714286a33.58302 33.58302 0 0 1 1.253878-47.521959L534.987755 128.313469a33.58302 33.58302 0 0 1 24.011755-9.257796zM644.284082 649.717551a64.156735 64.156735 0 1 1 0 128.334367 64.156735 64.156735 0 0 1 0-128.313469z',
      fill: (0, _helper.getIconColor)(color, 0, '#CCCCCC'),
    }),
  );
};

Iconshipinjiankong.defaultProps = {
  size: 18,
};
var _default = Iconshipinjiankong;
exports.default = _default;
