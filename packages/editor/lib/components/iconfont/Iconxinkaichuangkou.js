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

var Iconxinkaichuangkou = function Iconxinkaichuangkou(_ref) {
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
        viewBox: '0 0 1293 1024',
        width: size + 'px',
        height: size + 'px',
        style: style,
      },
      rest,
    ),
    /*#__PURE__*/ _react.default.createElement('path', {
      d: 'M258.694737 0v853.315368H1293.473684V0H258.694737z m948.547368 768h-862.315789v-512h862.315789v512z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
    /*#__PURE__*/ _react.default.createElement('path', {
      d: 'M86.231579 341.315368h86.231579V256H0V1024h948.547368v-85.315368h-862.315789z',
      fill: (0, _helper.getIconColor)(color, 1, '#333333'),
    }),
  );
};

Iconxinkaichuangkou.defaultProps = {
  size: 18,
};
var _default = Iconxinkaichuangkou;
exports.default = _default;
