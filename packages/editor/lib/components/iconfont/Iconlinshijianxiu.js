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

var Iconlinshijianxiu = function Iconlinshijianxiu(_ref) {
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
      d: 'M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z',
      fill: (0, _helper.getIconColor)(color, 0, '#F7B500'),
    }),
    /*#__PURE__*/ _react.default.createElement('path', {
      d: 'M512 93.090909a418.909091 418.909091 0 1 1 0 837.818182 418.909091 418.909091 0 0 1 0-837.818182z m244.084364 439.947636h-285.416728v260.282182h63.674182v-26.810182h154.717091v24.576h67.025455v-258.048z m-233.472-263.633454c-17.314909 73.728-48.593455 145.221818-91.601455 190.464v-181.527273H365.661091v509.393455H431.010909v-318.929455c16.756364 9.495273 40.215273 25.134545 51.944727 35.188364 24.576-28.485818 47.476364-65.908364 67.025455-107.799273h216.715636V332.520727h-192.698182c5.585455-16.756364 10.612364-32.954182 15.080728-50.269091l-66.466909-12.846545z m-191.581091 64.232727h-61.44v396.008727h61.44V333.637818z m252.462545 263.074909v108.357818H534.341818V596.712727h49.152z m105.565091 0v108.357818h-45.242182V596.712727h45.242182z m-88.250182-196.608l-43.008 39.656728c33.512727 26.251636 75.403636 64.232727 96.628364 85.457454l44.125091-47.476364a1030.795636 1030.795636 0 0 0-97.745455-77.637818z',
      fill: (0, _helper.getIconColor)(color, 1, '#FFFFFF'),
    }),
  );
};

Iconlinshijianxiu.defaultProps = {
  size: 18,
};
var _default = Iconlinshijianxiu;
exports.default = _default;
