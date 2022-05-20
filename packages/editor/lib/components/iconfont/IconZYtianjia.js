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

var IconZYtianjia = function IconZYtianjia(_ref) {
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
      d: 'M512.512 81.009778a428.657778 428.657778 0 0 1 304.753778 126.293333 428.657778 428.657778 0 0 1 126.293333 304.753778 428.657778 428.657778 0 0 1-126.293333 304.753778 428.657778 428.657778 0 0 1-304.753778 126.293333 428.657778 428.657778 0 0 1-304.753778-126.293333A428.657778 428.657778 0 0 1 81.464889 512a428.657778 428.657778 0 0 1 126.293333-304.753778 428.657778 428.657778 0 0 1 304.753778-126.293333m0-66.673778a497.777778 497.777778 0 1 0 0.056889 995.555556 497.777778 497.777778 0 0 0-0.056889-995.555556zM234.723556 478.72h555.52v66.673778H234.723556V478.72zM479.175111 234.382222h66.673778v555.463111H479.175111V234.382222z',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

IconZYtianjia.defaultProps = {
  size: 18,
};
var _default = IconZYtianjia;
exports.default = _default;
