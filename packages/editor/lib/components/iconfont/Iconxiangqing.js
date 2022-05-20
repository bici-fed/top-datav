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

var Iconxiangqing = function Iconxiangqing(_ref) {
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
        viewBox: '0 0 1365 1024',
        width: size + 'px',
        height: size + 'px',
        style: style,
      },
      rest,
    ),
    /*#__PURE__*/ _react.default.createElement('path', {
      d: 'M1310.122667 397.056a759.722667 759.722667 0 0 0-127.744-178.688 720.981333 720.981333 0 0 0-1033.813334 0A759.722667 759.722667 0 0 0 20.821333 397.056a191.146667 191.146667 0 0 0 0 173.568c33.706667 65.450667 76.8 125.696 127.744 178.773333a720.981333 720.981333 0 0 0 1033.813334 0 759.722667 759.722667 0 0 0 127.744-178.773333 191.146667 191.146667 0 0 0 0-173.568zM665.514667 703.317333a219.392 219.392 0 1 1 0-438.869333 219.392 219.392 0 0 1 0 438.869333z',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

Iconxiangqing.defaultProps = {
  size: 18,
};
var _default = Iconxiangqing;
exports.default = _default;
