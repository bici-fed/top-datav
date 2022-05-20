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

var IcontuichuquanpingCopy = function IcontuichuquanpingCopy(_ref) {
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
      d: 'M982.91256889 541.12711111c13.39847111 0 24.24832 10.92266667 24.24832 24.24832v60.73002667c0 13.39847111-10.92266667 24.24832-24.24832 24.24832H650.35377778v332.55879111c0 13.39847111-10.92266667 24.24832-24.24832 24.24832h-60.73002667a24.24832 24.24832 0 0 1-24.24832-24.24832v-393.216c0-26.86976 21.69969778-48.56945778 48.56945778-48.56945778h393.216z m-524.288-524.288c13.39847111 0 24.24832 10.92266667 24.24832 24.24832v393.216a48.56945778 48.56945778 0 0 1-48.56945778 48.56945778h-393.216a24.24832 24.24832 0 0 1-24.24832-24.24832v-60.73002667c0-11.65084445 8.30122667-21.48124445 19.36952889-23.73859555l4.87879111-0.50972445H373.64622222V41.08743111c0-13.39847111 10.92266667-24.24832 24.24832-24.24832h60.73002667z',
      fill: (0, _helper.getIconColor)(color, 0, '#ffffff'),
    }),
  );
};

IcontuichuquanpingCopy.defaultProps = {
  size: 18,
};
var _default = IcontuichuquanpingCopy;
exports.default = _default;
