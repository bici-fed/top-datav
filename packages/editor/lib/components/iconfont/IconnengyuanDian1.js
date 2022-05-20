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

var IconnengyuanDian1 = function IconnengyuanDian1(_ref) {
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
      d: 'M363.211605 599.313067h-219.818666c-28.672 0-48.469333-26.282667-38.263467-50.7904L323.582805 24.132267C329.556139 9.557333 344.779605 0 361.812139 0h368.571733c29.115733 0 48.913067 26.965333 37.956267 51.575467l-127.1808 285.525333h239.4112c35.2256 0 53.998933 37.956267 30.788266 62.190933L324.333739 1011.029333c-28.535467 29.730133-81.442133 3.959467-70.3488-34.269866l109.226666-377.514667z',
      fill: (0, _helper.getIconColor)(color, 0, '#F78F36'),
    }),
  );
};

IconnengyuanDian1.defaultProps = {
  size: 18,
};
var _default = IconnengyuanDian1;
exports.default = _default;
