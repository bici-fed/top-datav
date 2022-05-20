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

var Iconbingtu = function Iconbingtu(_ref) {
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
      d: 'M864 517.9904H506.0096V160a8.0384 8.0384 0 0 0-7.9872-7.9872h-26.0096a398.4384 398.4384 0 0 0-282.8288 117.0944 398.1824 398.1824 0 0 0-85.7088 127.0784 397.6192 397.6192 0 0 0-31.488 155.8016 398.4384 398.4384 0 0 0 117.0944 282.8288 398.1824 398.1824 0 0 0 127.1296 85.7088 397.6192 397.6192 0 0 0 155.8016 31.488 398.4384 398.4384 0 0 0 282.7776-117.0944 398.1824 398.1824 0 0 0 85.7088-127.1296 397.6192 397.6192 0 0 0 31.488-155.8016v-26.0096a8.0384 8.0384 0 0 0-7.9872-7.9872z m-158.3104 269.824a331.6224 331.6224 0 0 1-235.264 96.2048 329.8816 329.8816 0 0 1-233.216-97.2288 329.8816 329.8816 0 0 1-97.2288-234.8032c0-88.6784 34.5088-172.0832 97.2288-234.8032A329.1136 329.1136 0 0 1 438.016 221.696v364.288h364.288a329.3184 329.3184 0 0 1-96.6144 201.8304z m246.272-325.4272l-2.56-28.16a397.824 397.824 0 0 0-115.2-244.6336 399.36 399.36 0 0 0-245.248-114.9952l-28.2624-2.56a7.936 7.936 0 0 0-8.704 7.8848v384.1024c0 4.352 3.584 7.9872 7.9872 7.9872l384-1.024a7.9872 7.9872 0 0 0 8.0384-8.6016z m-332.1856-58.1632V147.6096a332.288 332.288 0 0 1 166.4 89.8048 330.1376 330.1376 0 0 1 90.0096 166.0928l-256.4096 0.7168z',
      fill: (0, _helper.getIconColor)(color, 0, '#333333'),
    }),
  );
};

Iconbingtu.defaultProps = {
  size: 18,
};
var _default = Iconbingtu;
exports.default = _default;
