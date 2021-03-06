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

var Iconguanlianmoban = function Iconguanlianmoban(_ref) {
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
      d: 'M577.53292 774.758364l-95.845889 95.914155a230.740103 230.740103 0 0 1-164.248724 67.993237 230.876635 230.876635 0 0 1-164.248724-67.993237 232.515027 232.515027 0 0 1 0-328.497448L249.172004 446.260916l-60.347411-60.347412L92.842172 481.82766a317.984437 317.984437 0 0 0 0 449.192271A315.663383 315.663383 0 0 0 317.438307 1023.998635c84.855014 0 164.521789-33.04089 224.596135-92.978704l95.914156-95.914156-60.347412-60.347411zM446.188554 249.1761L542.034442 153.398478a230.740103 230.740103 0 0 1 164.180458-68.061504 230.740103 230.740103 0 0 1 164.248724 67.993238 232.583293 232.583293 0 0 1 0 328.497448l-95.845889 95.914155 60.279146 60.279145 95.914155-95.845889a317.984437 317.984437 0 0 0 0-449.192271A315.526851 315.526851 0 0 0 706.2149 0.004096a315.390318 315.390318 0 0 0-224.596135 93.04697L385.841142 188.896955l60.347412 60.347412z m295.866155 65.74045a42.529907 42.529907 0 0 1-12.561 30.105439l-393.009104 393.07737a42.666439 42.666439 0 1 1-60.347411-60.347411l393.07737-393.009104a42.666439 42.666439 0 0 1 72.840145 30.173706z',
      fill: (0, _helper.getIconColor)(color, 0, '#096DD9'),
    }),
  );
};

Iconguanlianmoban.defaultProps = {
  size: 18,
};
var _default = Iconguanlianmoban;
exports.default = _default;
