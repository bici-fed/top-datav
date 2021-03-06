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

var IconYZshanchuhong = function IconYZshanchuhong(_ref) {
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
      d: 'M805.083429 1001.691429H219.428571c-49.225143 0-93.110857-42.934857-97.060571-96.109715V172.690286H902.582857l0.512 731.428571v1.462857c-4.388571 53.174857-48.274286 96.109714-98.011428 96.109715z m-610.011429-100.498286c1.901714 15.140571 14.628571 27.355429 24.356571 27.355428h586.093715c9.801143 0 22.454857-12.214857 24.429714-27.355428l-1.024-655.36H195.072v655.36zM60.928 172.690286h902.144c19.968 0 36.571429 16.603429 36.571429 36.571428 0 20.041143-16.603429 36.571429-36.571429 36.571429H60.928a36.864 36.864 0 0 1-36.571429-36.571429c0-19.968 16.603429-36.571429 36.571429-36.571428z m292.571429-146.285715h317.001142c19.968 0 36.571429 16.603429 36.571429 36.571429 0 20.041143-16.603429 36.571429-36.571429 36.571429H353.499429a36.864 36.864 0 0 1-36.571429-36.571429c0-19.968 16.603429-36.571429 36.571429-36.571429z m109.714285 475.428572v170.715428c0 19.968-16.530286 36.571429-36.571428 36.571429a36.864 36.864 0 0 1-36.571429-36.571429V501.76c0-19.968 16.603429-36.571429 36.571429-36.571429 20.041143 0 36.571429 16.603429 36.571428 36.571429z m170.715429 0v170.715428c0 19.968-16.603429 36.571429-36.571429 36.571429a36.864 36.864 0 0 1-36.571428-36.571429V501.76c0-19.968 16.530286-36.571429 36.571428-36.571429 19.968 0 36.571429 16.603429 36.571429 36.571429z',
      fill: (0, _helper.getIconColor)(color, 0, '#E02020'),
    }),
  );
};

IconYZshanchuhong.defaultProps = {
  size: 18,
};
var _default = IconYZshanchuhong;
exports.default = _default;
