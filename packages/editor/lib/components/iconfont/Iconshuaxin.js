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

var Iconshuaxin = function Iconshuaxin(_ref) {
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
      d: 'M102.6048 480.802133a386.184533 386.184533 0 0 1 113.186133-264.874666 385.024 385.024 0 0 1 273.749334-113.390934 384.068267 384.068267 0 0 1 273.408 113.4592c11.127467 11.127467 21.572267 22.9376 31.266133 35.293867l-67.720533 52.906667a9.0112 9.0112 0 0 0 3.413333 15.837866l197.632 48.401067a9.0112 9.0112 0 0 0 11.127467-8.669867l0.887466-203.502933a8.942933 8.942933 0 0 0-14.472533-7.099733l-63.488 49.5616A472.405333 472.405333 0 0 0 17.066667 480.324267a9.0112 9.0112 0 0 0 9.0112 9.216h67.515733c4.9152 0 8.874667-3.8912 9.0112-8.738134z m850.466133 8.738134h-67.515733a9.0112 9.0112 0 0 0-9.0112 8.8064 384.955733 384.955733 0 0 1-113.186133 264.874666 385.2288 385.2288 0 0 1-273.681067 113.322667 385.024 385.024 0 0 1-304.878933-148.6848l67.720533-52.906667a9.0112 9.0112 0 0 0-3.413333-15.837866L51.541333 610.7136a9.0112 9.0112 0 0 0-11.127466 8.669867L39.594667 823.022933c0 7.509333 8.669867 11.810133 14.472533 7.099734l63.488-49.629867a472.405333 472.405333 0 0 0 844.526933-281.668267 9.0112 9.0112 0 0 0-9.0112-9.284266z',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

Iconshuaxin.defaultProps = {
  size: 18,
};
var _default = Iconshuaxin;
exports.default = _default;
