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

var Iconshijifankui = function Iconshijifankui(_ref) {
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
      d: 'M490.189927 53.927036v80.822291h-408.207181v808.222913h815.049121V549.30488h81.504912v420.767402c0 29.762263-24.369559 53.858774-54.404871 53.858773H54.336608A54.131822 54.131822 0 0 1 0 970.00402V107.854071c0-29.762263 24.369559-53.927036 54.336608-53.927035h435.853319z m295.643027-38.090236a54.74618 54.74618 0 0 1 76.658305-0.273048l145.261686 142.121631 3.413103 3.549627a53.517463 53.517463 0 0 1-3.071793 72.835629l-532.853721 530.191501a27.304828 27.304828 0 0 1-19.249904 7.9184h-184.30759a27.304828 27.304828 0 0 1-19.181642-7.9184 26.826994 26.826994 0 0 1-7.986662-19.045118V564.390798c0-7.099255 2.867007-13.993724 7.986662-19.045118L785.832954 15.8368z',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

Iconshijifankui.defaultProps = {
  size: 18,
};
var _default = Iconshijifankui;
exports.default = _default;
