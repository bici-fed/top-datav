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

var Icontuichuquanping = function Icontuichuquanping(_ref) {
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
      d: 'M925.888 537.6c11.776 0 21.312 9.6 21.312 21.312v53.376c0 11.776-9.6 21.312-21.312 21.312H633.6v292.288c0 11.776-9.6 21.312-21.312 21.312h-53.376a21.312 21.312 0 0 1-21.312-21.312v-345.6c0-23.616 19.072-42.688 42.688-42.688h345.6z m-460.8-460.8c11.776 0 21.312 9.6 21.312 21.312v345.6a42.688 42.688 0 0 1-42.688 42.688h-345.6a21.312 21.312 0 0 1-21.312-21.312v-53.376c0-10.24 7.296-18.88 17.024-20.864l4.288-0.448H390.4V98.112c0-11.776 9.6-21.312 21.312-21.312h53.376z',
      fill: (0, _helper.getIconColor)(color, 0, '#222222'),
    }),
  );
};

Icontuichuquanping.defaultProps = {
  size: 18,
};
var _default = Icontuichuquanping;
exports.default = _default;
