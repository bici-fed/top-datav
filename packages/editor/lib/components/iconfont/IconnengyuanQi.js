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

var IconnengyuanQi = function IconnengyuanQi(_ref) {
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
      d: 'M386.112 17.792a9.024 9.024 0 0 1 13.504-8.224l46.464 27.36c63.68 37.568 114.624 91.456 151.296 160.512 44.352 83.136 64.576 159.52 60.416 227.264a6.624 6.624 0 0 0 2.24 5.408c1.696 1.568 3.616 1.792 4.864 1.664a7.04 7.04 0 0 0 4.608-2.24c23.744-26.432 40.48-53.312 49.6-79.648l14.624-41.952a9.088 9.088 0 0 1 14.624-3.712l32.736 30.016a390.912 390.912 0 0 1 126.912 288.128 389.44 389.44 0 0 1-116.096 277.76 392.192 392.192 0 0 1-125.888 84.032c-20.352 8.48-41.184 15.232-62.464 20.224l0.48-7.232c3.936-79.648-42.56-171.2-139.456-274.688 14.88 97.216-7.264 217.28-82.016 266.784l2.144 4.928a395.264 395.264 0 0 1-237.568-218.912 387.232 387.232 0 0 1-31.136-153.024c0-60.064 14.08-120 40.736-173.568a396.672 396.672 0 0 1 112.832-136.704 332.608 332.608 0 0 0 53.44-51.84 320.8 320.8 0 0 0 52.864-91.712c10.112-27.104 14.4-59.744 12.704-96.64z',
      fill: (0, _helper.getIconColor)(color, 0, '#F74B35'),
    }),
  );
};

IconnengyuanQi.defaultProps = {
  size: 18,
};
var _default = IconnengyuanQi;
exports.default = _default;
