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

var Icondianjiguanzhu1 = function Icondianjiguanzhu1(_ref) {
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
      d: 'M510.208 0a510.208 510.208 0 0 1 510.272 510.208A510.208 510.208 0 1 1 0 510.208 510.208 510.208 0 0 1 510.208 0zM512 256a23.808 23.808 0 0 0-21.376 13.952L424.384 410.24l-147.904 22.528a24.128 24.128 0 0 0-19.328 17.024 25.856 25.856 0 0 0 6.08 25.6l107.072 109.184-25.216 154.24a25.6 25.6 0 0 0 9.536 24.448 22.912 22.912 0 0 0 25.088 1.856l132.352-72.832 132.352 72.832a23.168 23.168 0 0 0 25.088-1.92 25.6 25.6 0 0 0 9.536-24.32l-25.28-154.24 107.072-109.248a25.984 25.984 0 0 0 6.016-25.6 24.256 24.256 0 0 0-19.328-17.024L599.552 410.24 533.376 269.952A23.808 23.808 0 0 0 512 256z',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

Icondianjiguanzhu1.defaultProps = {
  size: 18,
};
var _default = Icondianjiguanzhu1;
exports.default = _default;
