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

var Iconquanpingxianshi = function Iconquanpingxianshi(_ref) {
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
      d: 'M588.8 98.112v53.376c0 11.776-9.6 21.312-21.312 21.312H172.8v394.688c0 11.776-9.6 21.312-21.312 21.312h-53.376a21.312 21.312 0 0 1-21.312-21.312v-448c0-23.616 19.072-42.688 42.688-42.688h448c11.776 0 21.312 9.6 21.312 21.312zM435.2 925.888v-53.376a21.312 21.312 0 0 1 21.312-21.312H851.2V456.512c0-11.776 9.6-21.312 21.312-21.312h53.376c11.776 0 21.312 9.6 21.312 21.312v448a42.688 42.688 0 0 1-42.688 42.688h-448a21.312 21.312 0 0 1-21.312-21.312z',
      fill: (0, _helper.getIconColor)(color, 0, '#222222'),
    }),
  );
};

Iconquanpingxianshi.defaultProps = {
  size: 18,
};
var _default = Iconquanpingxianshi;
exports.default = _default;
