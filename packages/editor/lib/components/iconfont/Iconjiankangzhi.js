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

var Iconjiankangzhi = function Iconjiankangzhi(_ref) {
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
      d: 'M328.96 0c14.208 0 25.856 11.52 25.856 25.856v51.584h103.36V25.856c0-14.272 11.52-25.856 25.856-25.856 14.656 0 26.24 11.52 26.24 25.856v51.584h103.296V25.856c0-14.272 11.52-25.856 25.856-25.856 14.592 0 26.24 11.52 26.24 25.856v51.584h137.856c39.744 0 69.12 47.488 69.44 85.568V932.48c0 38.464-32.96 77.696-72.512 77.696l-629.888 0.128C130.944 1010.304 96 982.336 96 943.872v-780.8C96 124.992 121.6 77.44 174.336 77.44H302.72V25.856c0-14.272 11.52-25.856 25.856-25.856z m332.032 613.312c-22.976 0-44.288 21.76-58.304 38.08-14.08-16.32-35.392-38.08-58.368-38.08-41.344 0-75.008 31.68-75.008 70.592 0 23.232 12.096 39.488 21.76 52.608 28.16 37.952 98.944 85.248 101.952 87.296a17.408 17.408 0 0 0 19.264 0l7.296-4.992c19.392-13.44 71.488-51.008 94.72-82.304 9.6-13.12 21.696-29.44 21.696-52.608 0-38.912-33.664-70.592-75.008-70.592zM432.256 440.768H276.608a25.6 25.6 0 0 0 0 51.2h155.648a25.6 25.6 0 0 0 0-51.2z m103.36-155.648H276.608a25.6 25.6 0 0 0 0 51.2h259.008a25.6 25.6 0 0 0 0-51.2z',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

Iconjiankangzhi.defaultProps = {
  size: 18,
};
var _default = Iconjiankangzhi;
exports.default = _default;
