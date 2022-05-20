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

var Iconjiechuguanlian = function Iconjiechuguanlian(_ref) {
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
      d: 'M556.982825 747.081341L464.457177 839.533846a222.500412 222.500412 0 0 1-158.354173 65.609096 222.646698 222.646698 0 0 1-158.354172-65.609096 224.25584 224.25584 0 0 1 0-316.708345l92.452505-92.452506-58.14853-58.221672-92.525648 92.525648a306.614638 306.614638 0 0 0 0 433.078548A304.420354 304.420354 0 0 0 306.103004 987.428598a304.274068 304.274068 0 0 0 216.502703-89.673079l92.525648-92.525648-58.14853-58.14853zM430.080059 240.347988l92.525648-92.452505a222.500412 222.500412 0 0 1 158.354172-65.609096c59.830814 0 116.077631 23.259412 158.354173 65.609096a224.25584 224.25584 0 0 1 0 316.708345l-92.452505 92.452506 58.148529 58.221672 92.452506-92.525648a306.614638 306.614638 0 0 0 0-433.078548A304.274068 304.274068 0 0 0 681.033022 0.000731a304.200926 304.200926 0 0 0-216.502702 89.673079L371.931529 182.199458l58.14853 58.14853z m392.557433 623.688698a40.959971 40.959971 0 0 1-29.110836-12.068563l-658.285244-658.285244a41.106256 41.106256 0 1 1 58.221673-58.221673l658.285244 658.285244a41.106256 41.106256 0 0 1-29.110837 70.217093z',
      fill: (0, _helper.getIconColor)(color, 0, '#E02020'),
    }),
  );
};

Iconjiechuguanlian.defaultProps = {
  size: 18,
};
var _default = Iconjiechuguanlian;
exports.default = _default;
