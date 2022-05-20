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

var Iconweiguanzhu = function Iconweiguanzhu(_ref) {
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
      d: 'M512 52.337778c14.904889 0 28.672 7.395556 36.977778 19.512889l3.185778 5.461333 124.302222 251.790222 277.845333 40.391111a44.885333 44.885333 0 0 1 29.184 71.736889l-4.152889 4.778667-201.102222 195.925333 47.445333 276.764445a44.942222 44.942222 0 0 1-58.311111 50.062222l-6.712889-2.844445-248.547555-130.730666-248.490667 130.673778a44.714667 44.714667 0 0 1-65.649778-40.846223l0.625778-6.257777 47.274667-276.821334L44.828444 446.008889a44.942222 44.942222 0 0 1 18.659556-75.150222l6.200889-1.365334 277.845333-40.391111 124.302222-251.790222A44.885333 44.885333 0 0 1 512 52.280889z m126.691556 328.760889L512 124.472889l-126.691556 256.568889-283.363555 41.187555 205.084444 199.850667-48.298666 282.055111 253.383111-133.233778 253.326222 133.233778-48.355556-282.055111 205.027556-199.793778-283.420444-41.187555z',
      fill: (0, _helper.getIconColor)(color, 0, '#F7B500'),
    }),
  );
};

Iconweiguanzhu.defaultProps = {
  size: 18,
};
var _default = Iconweiguanzhu;
exports.default = _default;
